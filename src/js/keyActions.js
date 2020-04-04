import { keysDataCaseToggler } from './utils';

const printKeyData = (element) => {
  document.querySelector('.output__field').value += element.querySelector('.visible').innerText;
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
    if (element.classList.contains('capslock__active')) {
      element.classList.remove('capslock__active');
    } else {
      element.classList.add('capslock__active');
    }

    keysDataCaseToggler(element);
  }

  if (element.classList.contains('shiftleft')) {
    keysDataCaseToggler(element);
  }
};

export { printKeyData, doKeyAction };
