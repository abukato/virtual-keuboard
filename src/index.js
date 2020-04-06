import Keyboard from './components/Keyboard';

const keyboardTask = {
  title: 'RS School Task: Virtual Keyboard',
  osInfo: 'Создано в ОС Windows',
  switchLanguageInfo: 'Переключение языка: ALT + CTRL на физической клавиатуре или конпка WIN при клике мышью',
  gitHubLink: 'https://github.com/abukato/virtual-keyboard/tree/gh-pages',
};

window.onload = () => {
  const keyboard = new Keyboard(keyboardTask);
  keyboard.init();
};
