import KeyboardKey from './KeyboardKey';
import {
  keysArr,
  keyCodeArr,
  fnKeys,
  printableKeys,
} from '../utils/keysData';

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
    const allLetterOnButton = document.querySelectorAll('span');
    const engUpperCaseKeys = document.querySelectorAll('.engUp');
    const engLowerCaseKeys = document.querySelectorAll('.engLow');
    const ruUpperCaseKeys = document.querySelectorAll('.ruUp');
    const ruLowerCaseKeys = document.querySelectorAll('.ruLow');

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
    const textarea = document.querySelector('.output__field');

    this.textAreaValue += visibleKeyValue;
    textarea.value = this.textAreaValue;
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
    const keyClassList = key.classList;

    if (keyClassList.contains('backspace')) {
      this.textAreaValue = this.textAreaValue.slice(0, -1);
      textarea.value = this.textAreaValue;
    }

    if (keyClassList.contains('space')) {
      this.textAreaValue = `${this.textAreaValue} `;
      textarea.value = this.textAreaValue;
    }

    if (keyClassList.contains('enter')) {
      this.textAreaValue = `${this.textAreaValue}\n`;
      textarea.value = this.textAreaValue;
    }

    if (keyClassList.contains('tab')) {
      this.textAreaValue = `${this.textAreaValue}    `;
      textarea.value = this.textAreaValue;
    }

    if (keyClassList.contains('capslock')) {
      if (keyClassList.contains('capslock__active')) {
        keyClassList.remove('capslock__active');
      } else {
        keyClassList.add('capslock__active');
      }

      this.keysDataCaseToggler(key);
    }

    if (keyClassList.contains('shiftleft')) {
      this.keysDataCaseToggler(key);
    }
  }

  onMouseClickHandler(event) {
    const clickedButton = event.target.closest('button');

    if (clickedButton) {
      if (clickedButton.dataset.printable === 'true') {
        this.printKeyValue(clickedButton);
      } else {
        if (clickedButton.classList.contains('metaleft')) { this.changeLanguage(); }
        this.doKeyAction(clickedButton);
      }
    }
  }

  onKeyDownHandler(event) {
    event.preventDefault();

    if (keyCodeArr.includes(event.keyCode)) {
      const keyEventCode = event.code.toLowerCase();
      const key = document.querySelector(`.${keyEventCode}`);

      key.classList.add('key__press');

      if (event.ctrlKey && event.altKey) {
        this.changeLanguage();
      }

      if (event.keyCode === 16 && !event.repeat) {
        this.doKeyAction(key);
      }

      if (event.keyCode === 20 && !event.repeat) {
        this.doKeyAction(key);
      }

      if (fnKeys.includes(event.keyCode)) {
        this.doKeyAction(key);
      }

      if (printableKeys.includes(event.keyCode)) {
        this.printKeyValue(key);
      }
    }
  }

  onKeyUpHandler(event) {
    event.preventDefault();

    if (keyCodeArr.includes(event.keyCode)) {
      const keyEventCode = event.code.toLowerCase();
      const key = document.querySelector(`.${keyEventCode}`);

      key.classList.remove('key__press');

      if (event.keyCode === 16 && !event.repeat) {
        this.doKeyAction(key);
      }
    }
  }

  createKeyboardKey() {
    const keyboardKeys = document.querySelector('.keyboard__keys');
    const rowCount = this.keysData.length;

    for (let i = 0; i < rowCount; i += 1) {
      const row = document.createElement('div');

      row.classList.add('row', `row${i + 1}`);
      keyboardKeys.append(row);

      for (let j = 0; j < this.keysData[i].length; j += 1) {
        const key = new KeyboardKey(this.keysData[i][j], this.lang);
        const button = key.createKey();
        const currentRow = document.querySelector(`.row${i + 1}`);

        currentRow.insertAdjacentHTML('beforeend', button);
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
