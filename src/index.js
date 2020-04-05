import Keyboard from './components/Keyboard';

const keyboardTask = {
  title: 'Virtual Keyboard',
  osInfo: 'Создано в ОС Windows',
  switchLanguageInfo: 'Переключение языка: левый ALT + левый SHIFT на физической клавиатуре или конпка WIN при клике мышью',
  gitHubLink: 'https://github.com/abukato/virtual-keyboard/tree/master',
};

window.onload = () => {
  const keyboard = new Keyboard(keyboardTask);
  keyboard.init();
};
