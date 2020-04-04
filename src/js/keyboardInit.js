import { keysArr } from './keysData';

const body = document.querySelector('body');
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
    <p>Клавиатура создана в операционной системе Windows</p>
    <p>Для переключения языка комбинация: левыe ctrl + alt</p>
  </main>
  <footer><a class="github-link" href="https://github.com/abukato/virtual-keyboard/tree/master">GitHub</a></footer>
`;

const createBaseMarkup = () => {
  body.innerHTML = baseMarkup;
};

const createKeyboard = () => {
  for (let i = 0; i < keysArr.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('row');
    div.classList.add(`row${i + 1}`);
    document.querySelector('.keyboard__keys').append(div);
    keysArr[i].forEach((el) => {
      const elCode = el.code.toLocaleLowerCase();
      const currentRow = document.querySelector(`.row${i + 1}`);

      let buttonTemplate = '';

      if (localStorage.lang === 'ru') {
        buttonTemplate = `
        <button class="key ${elCode}" data-printable=${el.printable}>
          <span class="engLow">${el.eng[0]}</span>
          <span class="engUp">${el.eng[1]}</span>
          <span class="ruLow visible">${el.ru[0]}</span>
          <span class="ruUp">${el.ru[1]}</span>
        </button>`;
      } else {
        buttonTemplate = `
        <button class="key ${elCode}" data-printable=${el.printable}>
          <span class="engLow visible">${el.eng[0]}</span>
          <span class="engUp">${el.eng[1]}</span>
          <span class="ruLow">${el.ru[0]}</span>
          <span class="ruUp">${el.ru[1]}</span>
        </button>`;
      }

      currentRow.insertAdjacentHTML('beforeend', buttonTemplate);
    });
  }
};

export { createBaseMarkup, createKeyboard };
