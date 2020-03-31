const keys = [
  [
    {
      code: 'Backquote', eng: '`', ru: 'ё', printable: true,
    },
    {
      code: 'Digit1', eng: '1', ru: '1', printable: true,
    },
    {
      code: 'Digit2', eng: '2', ru: '2', printable: true,
    },
    {
      code: 'Digit3', eng: '3', ru: '3', printable: true,
    },
    {
      code: 'Digit4', eng: '4', ru: '4', printable: true,
    },
    {
      code: 'Digit5', eng: '5', ru: '5', printable: true,
    },
    {
      code: 'Digit6', eng: '6', ru: '6', printable: true,
    },
    {
      code: 'Digit7', eng: '7', ru: '7', printable: true,
    },
    {
      code: 'Digit8', eng: '8', ru: '8', printable: true,
    },
    {
      code: 'Digit9', eng: '9', ru: '9', printable: true,
    },
    {
      code: 'Digit0', eng: '0', ru: '0', printable: true,
    },
    {
      code: 'Minus', eng: '-', ru: '-', printable: true,
    },
    {
      code: 'Equal', eng: '=', ru: '=', printable: true,
    },
    {
      code: 'Backspace', eng: 'Backspace ⟵', ru: 'Backspace ⟵', printable: false,
    },
  ],

  [
    {
      code: 'Tab', eng: 'Tab ↹', ru: 'Tab ↹', printable: false,
    },
    {
      code: 'KeyQ', eng: 'q', ru: 'й', printable: true,
    },
    {
      code: 'KeyW', eng: 'w', ru: 'ц', printable: true,
    },
    {
      code: 'KeyE', eng: 'e', ru: 'у', printable: true,
    },
    {
      code: 'KeyR', eng: 'r', ru: 'к', printable: true,
    },
    {
      code: 'KeyT', eng: 't', ru: 'е', printable: true,
    },
    {
      code: 'KeyY', eng: 'y', ru: 'н', printable: true,
    },
    {
      code: 'KeyU', eng: 'u', ru: 'г', printable: true,
    },
    {
      code: 'KeyI', eng: 'i', ru: 'ш', printable: true,
    },
    {
      code: 'KeyO', eng: 'o', ru: 'щ', printable: true,
    },
    {
      code: 'KeyP', eng: 'p', ru: 'з', printable: true,
    },
    {
      code: 'BracketLeft', eng: '[', ru: 'х', printable: true,
    },
    {
      code: 'BracketRight', eng: ']', ru: 'ъ', printable: true,
    },
    {
      code: 'Backslash', eng: '\\', ru: '\\', printable: true,
    },
  ],

  [
    {
      code: 'CapsLock', eng: 'Caps Lock', ru: 'Caps Lock', printable: false,
    },
    {
      code: 'KeyA', eng: 'a', ru: 'ф', printable: true,
    },
    {
      code: 'KeyS', eng: 's', ru: 'ы', printable: true,
    },
    {
      code: 'KeyD', eng: 'd', ru: 'в', printable: true,
    },
    {
      code: 'KeyF', eng: 'f', ru: 'а', printable: true,
    },
    {
      code: 'KeyG', eng: 'g', ru: 'п', printable: true,
    },
    {
      code: 'KeyH', eng: 'h', ru: 'р', printable: true,
    },
    {
      code: 'KeyJ', eng: 'j', ru: 'о', printable: true,
    },
    {
      code: 'KeyK', eng: 'k', ru: 'л', printable: true,
    },
    {
      code: 'KeyL', eng: 'l', ru: 'д', printable: true,
    },
    {
      code: 'Semicolon', eng: ';', ru: 'ж', printable: true,
    },
    {
      code: 'Quote', eng: '"', ru: 'э', printable: true,
    },
    {
      code: 'Enter', eng: 'Enter ↵', ru: 'Enter ↵', printable: false,
    },
  ],

  [
    {
      code: 'ShiftLeft', eng: 'Shift ⇧', ru: 'Shift ⇧', printable: false,
    },
    {
      code: 'KeyZ', eng: 'z', ru: 'я', printable: true,
    },
    {
      code: 'KeyX', eng: 'x', ru: 'ч', printable: true,
    },
    {
      code: 'KeyC', eng: 'c', ru: 'с', printable: true,
    },
    {
      code: 'KeyV', eng: 'v', ru: 'м', printable: true,
    },
    {
      code: 'KeyB', eng: 'b', ru: 'и', printable: true,
    },
    {
      code: 'KeyN', eng: 'n', ru: 'т', printable: true,
    },
    {
      code: 'KeyM', eng: 'm', ru: 'ь', printable: true,
    },
    {
      code: 'Comma', eng: ',', ru: 'б', printable: true,
    },
    {
      code: 'Period', eng: '.', ru: 'ю', printable: true,
    },
    {
      code: 'Slash', eng: '/', ru: '.', printable: true,
    },
    {
      code: 'ArrowUp', eng: '↑', ru: '↑', printable: true,
    },
    {
      code: 'ShiftRight', eng: 'Shift ⇧', ru: 'Shift ⇧', printable: false,
    },
  ],

  [
    {
      code: 'ControlLeft', eng: 'Ctrl', ru: 'Ctrl', printable: false,
    },
    {
      code: 'MetaLeft', eng: 'Win', ru: 'Win', printable: false,
    },
    {
      code: 'AltLeft', eng: 'Alt', ru: 'Alt', printable: false,
    },
    {
      code: 'Space', eng: ' ', ru: ' ', printable: false,
    },
    {
      code: 'AltRight', eng: 'Alt', ru: 'Alt', printable: false,
    },
    {
      code: 'ControlRight', eng: 'Ctrl', ru: 'Ctrl', printable: false,
    },
    {
      code: 'ArrowLeft', eng: '←', ru: '←', printable: true,
    },
    {
      code: 'ArrowDown', eng: '↓', ru: '↓', printable: true,
    },
    {
      code: 'ArrowRight', eng: '→', ru: '→', printable: true,
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

const lang = 'eng';

const createKeyboard = () => {
  for (let i = 0; i < keys.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('row');
    div.classList.add(`row${i + 1}`);
    document.querySelector('.keyboard__keys').append(div);
    keys[i].forEach((el) => {
      const button = document.createElement('button');
      const currentButton = el;
      button.classList.add('key');
      button.classList.add(currentButton.code.toLowerCase());
      button.dataset.printable = `${currentButton.printable}`;
      button.innerText = currentButton[lang].toUpperCase();
      document.querySelector(`.row${i + 1}`).append(button);
    });
  }
};

const isCapsLock = false;

const printKeySymbol = (element) => {
  if (isCapsLock === false) {
    document.querySelector('.output__field').value += element.innerText.toLowerCase();
  } else {
    document.querySelector('.output__field').value += element.innerText.toUpperCase();
  }
};

const doKeyAction = (element) => { console.log(element); };

const addKeyboardKeysClickHandler = () => {
  document.querySelector('.keyboard__keys').addEventListener('click', (event) => {
    if (event.target.classList.contains('key')) {
      if (event.target.dataset.printable === 'true') {
        printKeySymbol(event.target);
      } else {
        doKeyAction(event.target);
      }
    }
  });
};

window.onload = () => {
  createBaseMarkup();

  createKeyboard();

  addKeyboardKeysClickHandler();
};
