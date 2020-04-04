
let isCapsLock = false;
let currentLang = localStorage.lang || 'eng';

const showDesiredKeys = () => {
  const engUpperCaseKeys = document.querySelectorAll('.engUp');
  const engLowerCaseKeys = document.querySelectorAll('.engLow');
  const ruUpperCaseKeys = document.querySelectorAll('.ruUp');
  const ruLowerCaseKeys = document.querySelectorAll('.ruLow');
  const allLetterOnButton = document.querySelectorAll('span');

  const visibleEl = (el) => el.classList.add('visible');

  allLetterOnButton.forEach((el) => el.classList.remove('visible'));

  if (isCapsLock && currentLang === 'eng') {
    engUpperCaseKeys.forEach((el) => visibleEl(el));
  } else if (!isCapsLock && currentLang === 'eng') {
    engLowerCaseKeys.forEach((el) => visibleEl(el));
  } else if (isCapsLock && currentLang === 'ru') {
    ruUpperCaseKeys.forEach((el) => visibleEl(el));
  } else {
    ruLowerCaseKeys.forEach((el) => visibleEl(el));
  }
};

const keysDataCaseToggler = () => {
  isCapsLock = !isCapsLock;
  showDesiredKeys();
};

const changeLanguage = () => {
  currentLang = currentLang === 'eng' ? 'ru' : 'eng';
  localStorage.lang = currentLang;
  showDesiredKeys();
};

export { keysDataCaseToggler, changeLanguage };
