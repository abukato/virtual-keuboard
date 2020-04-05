import { keysArr, keyCodeArr } from '../utils/keysData';
import KeyboardKey from './KeyboardKey';

const body = document.querySelector('body');

export default class Keyboard {
  constructor(props) {
    this.title = props.title;
    this.osInfo = props.osInfo;
    this.switchLanguageInfo = props.switchLanguageInfo;
    this.gitHubLink = props.gitHubLink;
    this.textAreaValue = '';
    this.keysData = keysArr;
    this.lang = localStorage.lang || 'eng';
    this.isCapsLock = false;
  }

  showDesiredKeys() {
    const engUpperCaseKeys = document.querySelectorAll('.engUp');
    const engLowerCaseKeys = document.querySelectorAll('.engLow');
    const ruUpperCaseKeys = document.querySelectorAll('.ruUp');
    const ruLowerCaseKeys = document.querySelectorAll('.ruLow');
    const allLetterOnButton = document.querySelectorAll('span');

    const visibleEl = (el) => el.classList.add('visible');

    allLetterOnButton.forEach((el) => el.classList.remove('visible'));

    if (this.isCapsLock && this.lang === 'eng') {
      engUpperCaseKeys.forEach((el) => visibleEl(el));
    } else if (!this.isCapsLock && this.lang === 'eng') {
      engLowerCaseKeys.forEach((el) => visibleEl(el));
    } else if (this.isCapsLock && this.lang === 'ru') {
      ruUpperCaseKeys.forEach((el) => visibleEl(el));
    } else {
      ruLowerCaseKeys.forEach((el) => visibleEl(el));
    }
  }

  printKeyValue(key) {
    const visibleKeyValue = key.querySelector('.visible').innerText;
    this.textAreaValue += visibleKeyValue;
    document.querySelector('.output__field').value = this.textAreaValue;
  }

  keysDataCaseToggler() {
    this.isCapsLock = !this.isCapsLock;
    this.showDesiredKeys();
  }

  changeLanguage() {
    this.lang = this.lang === 'eng' ? 'ru' : 'eng';
    localStorage.lang = this.lang;
    this.showDesiredKeys();
  }

  doKeyAction(key) {
    const textarea = document.querySelector('.output__field');
    if (key.classList.contains('backspace')) {
      this.textAreaValue = this.textAreaValue.slice(0, -1);
      textarea.value = this.textAreaValue;
    }

    if (key.classList.contains('space')) {
      this.textAreaValue = `${this.textAreaValue} `;
      textarea.value = this.textAreaValue;
    }

    if (key.classList.contains('enter')) {
      this.textAreaValue = `${this.textAreaValue}\n`;
      textarea.value = this.textAreaValue;
    }

    if (key.classList.contains('tab')) {
      this.textAreaValue = `${this.textAreaValue}    `;
      textarea.value = this.textAreaValue;
    }

    if (key.classList.contains('capslock')) {
      if (key.classList.contains('capslock__active')) {
        key.classList.remove('capslock__active');
      } else {
        key.classList.add('capslock__active');
      }

      this.keysDataCaseToggler(key);
    }

    if (key.classList.contains('shiftleft')) {
      this.keysDataCaseToggler(key);
    }
  }

  onMouseClickHandler(event) {
    const clickedButton = event.target.closest('button');
    if (clickedButton) {
      if (clickedButton.dataset.printable === 'true') {
        this.printKeyValue(clickedButton);
      } else {
        if (clickedButton.classList.contains('metaleft')) this.changeLanguage();
        this.doKeyAction(clickedButton);
      }
    }
  }

  onKeyDownHandler(event) {
    event.preventDefault();
    if (keyCodeArr.includes(event.keyCode)) {
      const keyEventCode = event.code.toLowerCase();
      document.querySelector(`.${keyEventCode}`).classList.add('key__press');
      const key = document.querySelector(`.${keyEventCode}`);

      if (event.ctrlKey && event.altKey) {
        this.changeLanguage();
      }

      if (event.keyCode === 16 && !event.repeat) {
        if (event.code === 'ShiftLeft') {
          this.doKeyAction(key);
        }
      }

      if (
        event.keyCode === 8 // Backspace
        || event.keyCode === 32 // Space
        || event.keyCode === 13 // Enter
        || event.keyCode === 9 // Tab
        || ((event.keyCode === 20) && (!event.repeat)) // CapsLock
        || event.keyCode === 91 // Win
      ) {
        this.doKeyAction(key);
      }

      if (
        (event.keyCode >= 65 && event.keyCode <= 90)
        || (event.keyCode >= 37 && event.keyCode <= 40)
        || (event.keyCode >= 48 && event.keyCode <= 57)
        || event.keyCode === 192
        || (event.keyCode >= 219 && event.keyCode <= 221)
        || event.keyCode === 186
        || event.keyCode === 222
        || (event.keyCode >= 187 && event.keyCode <= 191)
      ) {
        this.printKeyValue(key);
      }
    }
  }

  onKeyUpHandler(event) {
    event.preventDefault();
    if (keyCodeArr.includes(event.keyCode)) {
      const keyEventCode = event.code.toLowerCase();
      document.querySelector(`.${keyEventCode}`).classList.remove('key__press');
      if (event.keyCode === 16 && !event.repeat) {
        this.doKeyAction(document.querySelector('.shiftleft'));
      }
    }
  }

  createKeyboardKey() {
    const rowCount = this.keysData.length;
    for (let i = 0; i < rowCount; i += 1) {
      const row = document.createElement('div');
      row.classList.add('row', `row${i + 1}`);

      document.querySelector('.keyboard__keys').append(row);

      for (let j = 0; j < this.keysData[i].length; j += 1) {
        const key = new KeyboardKey(this.keysData[i][j], this.lang);
        const button = key.createKey();
        document.querySelector(`.row${i + 1}`).insertAdjacentHTML('beforeend', button);
      }
    }
  }

  init() {
    const baseMarkup = `
      <header>
        <h1 class="title">${this.title}</h1>
      </header>
      <main>
        <section class="output">
          <textarea class="output__field" disabled>${this.textAreaValue}</textarea>
        </section>
        <section class="keyboard">
          <div class="keyboard__keys">
          </div>
        </section>
        <p>${this.osInfo}</p>
        <p>${this.switchLanguageInfo}</p>
      </main>
      <footer>
        <a class="github-link" href=${this.gitHubLink}>GitHub</a>
      </footer>
    `;

    body.innerHTML = baseMarkup;
    this.createKeyboardKey();

    const keyboardKeys = document.querySelector('.keyboard__keys');

    keyboardKeys.addEventListener('click', this.onMouseClickHandler.bind(this));
    body.addEventListener('keydown', this.onKeyDownHandler.bind(this));
    body.addEventListener('keyup', this.onKeyUpHandler.bind(this));
  }
}
