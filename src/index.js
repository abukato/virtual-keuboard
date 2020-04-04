import { createBaseMarkup, createKeyboard } from './js/keyboardInit';
import { keyCodeArr } from './js/keysData';
import { printKeyData, doKeyAction } from './js/keyActions';
import { changeLanguage } from './js/utils';

const body = document.querySelector('body');

const addKeyboardKeysClickHandler = () => {
  document.querySelector('.keyboard__keys').addEventListener('click', (event) => {
    const clickedButton = event.target.closest('button');

    if (event.target.classList.contains('row') || event.target.classList.contains('keyboard__keys')) {
      return;
    }

    if (clickedButton.classList.contains('key')) {
      if (clickedButton.dataset.printable === 'true') {
        printKeyData(clickedButton);
      } else {
        doKeyAction(clickedButton);
      }
    }
  });
};

const addOnKeyPressHandler = () => {
  body.addEventListener('keydown', (event) => {
    if (keyCodeArr.includes(event.keyCode)) {
      event.preventDefault();
      const keyEventCode = event.code.toLowerCase();
      document.querySelector(`.${keyEventCode}`).classList.add('key__press');
      const key = document.querySelector(`.${keyEventCode}`);

      if (event.ctrlKey && event.altKey) {
        changeLanguage();
      }

      if (event.keyCode === 16 && !event.repeat) {
        if (event.code === 'ShiftLeft') {
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
        // event.preventDefault();
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
        printKeyData(key);
      }
    }
  });

  body.addEventListener('keyup', (event) => {
    if (keyCodeArr.includes(event.keyCode)) {
      event.preventDefault();
      const keyEventCode = event.code.toLowerCase();
      document.querySelector(`.${keyEventCode}`).classList.remove('key__press');
      if (event.keyCode === 16 && !event.repeat) {
        doKeyAction(document.querySelector('.shiftleft'));
      }
    }
  });
};

window.onload = () => {
  createBaseMarkup();

  createKeyboard();

  addKeyboardKeysClickHandler();

  addOnKeyPressHandler();
};
