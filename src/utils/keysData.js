const keysArr = [
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

const keyCodeArr = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 220, 221, 219,
  80, 79, 73, 85, 89, 84, 82, 69, 87, 81, 9, 20, 65, 83, 68, 70, 71, 72,
  74, 75, 76, 186, 222, 13, 16, 191, 190, 188, 77, 78, 66, 86, 67, 88,
  90, 91, 18, 32, 18, 17, 37, 40, 38, 39,
];

const fnKeys = [8, 9, 13, 32, 91];

const printableKeys = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 220, 221, 219,
  80, 79, 73, 85, 89, 84, 82, 69, 87, 81, 65, 83, 68, 70, 71, 72,
  74, 75, 76, 186, 222, 191, 190, 188, 77, 78, 66, 86, 67, 88,
  90, 37, 40, 38, 39,
];

export {
  keysArr,
  keyCodeArr,
  fnKeys,
  printableKeys,
};
