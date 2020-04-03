const keys = [
  [
    {
      code: 'Backquote', eng: ['`', '~'], ru: ['ё', 'Ё'], printable: true,
    },
    {
      code: 'Digit1', eng: ['1', '!'], ru: ['1', '!'], printable: true,
    },
    {
      code: 'Digit2', eng: ['2', '@'], ru: ['2', '"'], printable: true,
    },
    {
      code: 'Digit3', eng: ['3', '#'], ru: ['3', '№'], printable: true,
    },
    {
      code: 'Digit4', eng: ['4', '$'], ru: ['4', ';'], printable: true,
    },
    {
      code: 'Digit5', eng: ['5', '%'], ru: ['5', '%'], printable: true,
    },
    {
      code: 'Digit6', eng: ['6', '^'], ru: ['6', ':'], printable: true,
    },
    {
      code: 'Digit7', eng: ['7', '&'], ru: ['7', '?'], printable: true,
    },
    {
      code: 'Digit8', eng: ['8', '*'], ru: ['8', '*'], printable: true,
    },
    {
      code: 'Digit9', eng: ['9', '('], ru: ['9', '('], printable: true,
    },
    {
      code: 'Digit0', eng: ['0', ')'], ru: ['0', ')'], printable: true,
    },
    {
      code: 'Minus', eng: ['-', '_'], ru: ['-', '_'], printable: true,
    },
    {
      code: 'Equal', eng: ['=', '+'], ru: ['=', '+'], printable: true,
    },
    {
      code: 'Backspace', eng: ['Backspace ⟵', 'Backspace ⟵'], ru: ['Backspace ⟵', 'Backspace ⟵'], printable: false,
    },
  ],

  [
    {
      code: 'Tab', eng: ['Tab ↹', 'Tab ↹'], ru: ['Tab ↹', 'Tab ↹'], printable: false,
    },
    {
      code: 'KeyQ', eng: ['q', 'Q'], ru: ['й', 'Й'], printable: true,
    },
    {
      code: 'KeyW', eng: ['w', 'W'], ru: ['ц', 'Ц'], printable: true,
    },
    {
      code: 'KeyE', eng: ['e', 'E'], ru: ['у', 'У'], printable: true,
    },
    {
      code: 'KeyR', eng: ['r', 'R'], ru: ['к', 'К'], printable: true,
    },
    {
      code: 'KeyT', eng: ['t', 'T'], ru: ['е', 'Е'], printable: true,
    },
    {
      code: 'KeyY', eng: ['y', 'Y'], ru: ['н', 'Н'], printable: true,
    },
    {
      code: 'KeyU', eng: ['u', 'U'], ru: ['г', 'Г'], printable: true,
    },
    {
      code: 'KeyI', eng: ['i', 'I'], ru: ['ш', 'Ш'], printable: true,
    },
    {
      code: 'KeyO', eng: ['o', 'O'], ru: ['щ', 'Щ'], printable: true,
    },
    {
      code: 'KeyP', eng: ['p', 'P'], ru: ['з', 'З'], printable: true,
    },
    {
      code: 'BracketLeft', eng: ['[', '{'], ru: ['х', 'Х'], printable: true,
    },
    {
      code: 'BracketRight', eng: [']', '}'], ru: ['ъ', 'Ъ'], printable: true,
    },
    {
      code: 'Backslash', eng: ['\\', '|'], ru: ['\\', '/'], printable: true,
    },
  ],

  [
    {
      code: 'CapsLock', eng: ['Caps Lock', 'Caps Lock'], ru: ['Caps Lock', 'Caps Lock'], printable: false,
    },
    {
      code: 'KeyA', eng: ['a', 'A'], ru: ['ф', 'Ф'], printable: true,
    },
    {
      code: 'KeyS', eng: ['s', 'S'], ru: ['ы', 'Ы'], printable: true,
    },
    {
      code: 'KeyD', eng: ['d', 'D'], ru: ['в', 'В'], printable: true,
    },
    {
      code: 'KeyF', eng: ['f', 'F'], ru: ['а', 'А'], printable: true,
    },
    {
      code: 'KeyG', eng: ['g', 'G'], ru: ['п', 'П'], printable: true,
    },
    {
      code: 'KeyH', eng: ['h', 'H'], ru: ['р', 'Р'], printable: true,
    },
    {
      code: 'KeyJ', eng: ['j', 'J'], ru: ['о', 'О'], printable: true,
    },
    {
      code: 'KeyK', eng: ['k', 'K'], ru: ['л', 'Л'], printable: true,
    },
    {
      code: 'KeyL', eng: ['l', 'L'], ru: ['д', 'Д'], printable: true,
    },
    {
      code: 'Semicolon', eng: [';', ':'], ru: ['ж', 'Ж'], printable: true,
    },
    {
      code: 'Quote', eng: ['\'', '"'], ru: ['э', 'Э'], printable: true,
    },
    {
      code: 'Enter', eng: ['Enter ↵', 'Enter ↵'], ru: ['Enter ↵', 'Enter ↵'], printable: false,
    },
  ],

  [
    {
      code: 'ShiftLeft', eng: ['Shift ⇧', 'Shift ⇧'], ru: ['Shift ⇧', 'Shift ⇧'], printable: false,
    },
    {
      code: 'KeyZ', eng: ['z', 'Z'], ru: ['я', 'Я'], printable: true,
    },
    {
      code: 'KeyX', eng: ['x', 'X'], ru: ['ч', 'Ч'], printable: true,
    },
    {
      code: 'KeyC', eng: ['c', 'C'], ru: ['с', 'С'], printable: true,
    },
    {
      code: 'KeyV', eng: ['v', 'V'], ru: ['м', 'М'], printable: true,
    },
    {
      code: 'KeyB', eng: ['b', 'B'], ru: ['и', 'И'], printable: true,
    },
    {
      code: 'KeyN', eng: ['n', 'N'], ru: ['т', 'Т'], printable: true,
    },
    {
      code: 'KeyM', eng: ['m', 'M'], ru: ['ь', 'Ь'], printable: true,
    },
    {
      code: 'Comma', eng: [',', '<'], ru: ['б', 'Б'], printable: true,
    },
    {
      code: 'Period', eng: ['.', '>'], ru: ['ю', 'Ю'], printable: true,
    },
    {
      code: 'Slash', eng: ['/', '?'], ru: ['.', ','], printable: true,
    },
    {
      code: 'ArrowUp', eng: ['↑', '↑'], ru: ['↑', '↑'], printable: true,
    },
    {
      code: 'ShiftRight', eng: ['Shift ⇧', 'Shift ⇧'], ru: ['Shift ⇧', 'Shift ⇧'], printable: false,
    },
  ],

  [
    {
      code: 'ControlLeft', eng: ['Ctrl', 'Ctrl'], ru: ['Ctrl', 'Ctrl'], printable: false,
    },
    {
      code: 'MetaLeft', eng: ['Win', 'Win'], ru: ['Win', 'Win'], printable: false,
    },
    {
      code: 'AltLeft', eng: ['Alt', 'Alt'], ru: ['Alt', 'Alt'], printable: false,
    },
    {
      code: 'Space', eng: [' ', ' '], ru: [' ', ' '], printable: false,
    },
    {
      code: 'AltRight', eng: ['Alt', 'Alt'], ru: ['Alt', 'Alt'], printable: false,
    },
    {
      code: 'ControlRight', eng: ['Ctrl', 'Ctrl'], ru: ['Ctrl', 'Ctrl'], printable: false,
    },
    {
      code: 'ArrowLeft', eng: ['←', '←'], ru: ['←', '←'], printable: true,
    },
    {
      code: 'ArrowDown', eng: ['↓', '↓'], ru: ['↓', '↓'], printable: true,
    },
    {
      code: 'ArrowRight', eng: ['→', '→'], ru: ['→', '→'], printable: true,
    },
  ],
];

const baseMarkup = `
  <header>
    <h1 class="title">Virtual Keyboard</h1>
  </header>
  <main>
    <section class="output">
      <textarea class="output__field" disabled></textarea>
    </section>
    <section class="keyboard">
      <div class="keyboard__keys"></div>
    </section>
  </main>
  <footer></footer>
`;

const createBaseMarkup = () => {
  document.querySelector('body').innerHTML = baseMarkup;
};

const createKeyboard = () => {
  for (let i = 0; i < keys.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('row');
    div.classList.add(`row${i + 1}`);
    document.querySelector('.keyboard__keys').append(div);
    keys[i].forEach((el) => {
      let buttonTemplate = '';
      if (localStorage.lang === 'ru') {
        buttonTemplate = `
        <button class="key ${el.code.toLocaleLowerCase()}" data-printable=${el.printable}>
          <span class="engLow">${el.eng[0]}</span>
          <span class="engUp">${el.eng[1]}</span>
          <span class="ruLow visible">${el.ru[0]}</span>
          <span class="ruUp">${el.ru[1]}</span>
        </button>`;
      } else {
        buttonTemplate = `
        <button class="key ${el.code.toLocaleLowerCase()}" data-printable=${el.printable}>
          <span class="engLow visible">${el.eng[0]}</span>
          <span class="engUp">${el.eng[1]}</span>
          <span class="ruLow">${el.ru[0]}</span>
          <span class="ruUp">${el.ru[1]}</span>
        </button>`;
      }
      document.querySelector(`.row${i + 1}`).insertAdjacentHTML('beforeend', buttonTemplate);
    });
  }
};

let isCapsLock = false;
let currentLang = localStorage.lang || 'eng';

const printKeySymbol = (element) => {
  document.querySelector('.output__field').value += element.querySelector('.visible').innerText;
};

const showDesiredKeys = () => {
  const engUpperCaseKeys = document.querySelectorAll('.engUp');
  const engLowerCaseKeys = document.querySelectorAll('.engLow');
  const ruUpperCaseKeys = document.querySelectorAll('.ruUp');
  const ruLowerCaseKeys = document.querySelectorAll('.ruLow');

  document.querySelectorAll('span').forEach((el) => el.classList.remove('visible'));
  if (isCapsLock === true && currentLang === 'eng') {
    engUpperCaseKeys.forEach((el) => el.classList.add('visible'));
  } else if (isCapsLock === false && currentLang === 'eng') {
    engLowerCaseKeys.forEach((el) => el.classList.add('visible'));
  } else if (isCapsLock === true && currentLang === 'ru') {
    ruUpperCaseKeys.forEach((el) => el.classList.add('visible'));
  } else {
    ruLowerCaseKeys.forEach((el) => el.classList.add('visible'));
  }
};

const capsLockToggler = (element) => {
  if (!isCapsLock) {
    isCapsLock = true;
    element.classList.add('capslock__active');
  } else {
    isCapsLock = false;
    element.classList.remove('capslock__active');
  }
  showDesiredKeys();
};

const shiftToggler = () => {
  if (!isCapsLock) {
    isCapsLock = true;
  } else {
    isCapsLock = false;
  }
  showDesiredKeys();
};

const changeLanguage = () => {
  currentLang = currentLang === 'eng' ? 'ru' : 'eng';
  localStorage.lang = currentLang;
  showDesiredKeys();
};

const doKeyAction = (element) => {
  const textarea = document.querySelector('.output__field');
  if (element.classList.contains('backspace')) {
    textarea.value = textarea.value.slice(0, -1);
  }
  if (element.classList.contains('space')) {
    textarea.value = `${textarea.value} `;
  }
  if (element.classList.contains('enter')) {
    textarea.value = `${textarea.value}\n`;
  }
  if (element.classList.contains('tab')) {
    textarea.value = `${textarea.value}    `;
  }
  if (element.classList.contains('capslock')) {
    capsLockToggler(element);
  }
  if (element.classList.contains('shiftleft')) {
    shiftToggler(element);
  }
};

const addKeyboardKeysClickHandler = () => {
  document.querySelector('.keyboard__keys').addEventListener('click', (event) => {
    if (event.target.classList.contains('row') || event.target.classList.contains('keyboard__keys')) return;
    if (event.target.closest('button').classList.contains('key')) {
      if (event.target.closest('button').dataset.printable === 'true') {
        printKeySymbol(event.target.closest('button'));
      } else {
        doKeyAction(event.target.closest('button'));
      }
    }
  });
};

const addOnKeyPressHandler = () => {
  document.querySelector('body').addEventListener('keydown', (event) => {
    const keyEventCode = event.code.toLowerCase();
    document.querySelector(`.${keyEventCode}`).classList.add('key__press');
    const key = document.querySelector(`.${keyEventCode}`);

    if (event.ctrlKey && event.altKey) {
      changeLanguage();
    }

    if (event.keyCode === 16 && !event.repeat) {
      if (event.code === 'ShiftLeft') {
        event.preventDefault();
        doKeyAction(key);
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
      event.preventDefault();
      doKeyAction(key);
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
      printKeySymbol(key);
    }
  });

  document.querySelector('body').addEventListener('keyup', (event) => {
    event.preventDefault();
    const keyEventCode = event.code.toLowerCase();
    document.querySelector(`.${keyEventCode}`).classList.remove('key__press');
    if (event.keyCode === 16 && !event.repeat) {
      doKeyAction(document.querySelector('.shiftleft'));
    }
  });
};

window.onload = () => {
  createBaseMarkup();

  createKeyboard();

  addKeyboardKeysClickHandler();

  addOnKeyPressHandler();
};
