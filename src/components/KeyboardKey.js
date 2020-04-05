export default class KeyboardKey {
  constructor(props, lang) {
    this.keyCode = props.code;
    this.engValue = props.eng;
    this.ruValue = props.ru;
    this.pritable = props.printable;
    this.capsLock = 0;
    this.lang = lang;
  }

  createKey() {
    let buttonTemplate = '';
    if (this.lang === 'ru') {
      buttonTemplate = `
      <button class="key ${this.keyCode.toLowerCase()}" data-printable=${this.pritable}>
        <span class="engLow">${this.engValue[0]}</span>
        <span class="engUp">${this.engValue[1]}</span>
        <span class="ruLow visible">${this.ruValue[0]}</span>
        <span class="ruUp">${this.ruValue[1]}</span>
      </button>
      `;
    } else {
      buttonTemplate = `
      <button class="key ${this.keyCode.toLowerCase()}" data-printable=${this.pritable}>
        <span class="engLow visible">${this.engValue[0]}</span>
        <span class="engUp">${this.engValue[1]}</span>
        <span class="ruLow">${this.ruValue[0]}</span>
        <span class="ruUp">${this.ruValue[1]}</span>
      </button>
      `;
    }
    return buttonTemplate;
  }
}
