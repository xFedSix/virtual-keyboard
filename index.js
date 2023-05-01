const addMainElement = () => {
  const main = document.createElement("main");
  main.className = "main";
  let template = "";
  template += `<h1 class="title">Виртуальная клавиатура</h1>`;
  template += `<textarea class="textarea"></textarea>`;
  template += `<div class="${localStorage.lang || ""}" id="keyboard"></div>`;

  template += `<p class="paragraf">Клавиатура создана в операционной системе Windows<br />Для переключения языка комбинация: левыe alt + Ctrl</p>`;
  document.body.append(main);
  document.querySelector(".main").innerHTML = template;
};
addMainElement();

const englishKeys = {
  Backquote: ["`", "~"],
  Digit1: ["1", "!"],
  Digit2: ["2", "@"],
  Digit3: ["3", "#"],
  Digit4: ["4", "$"],
  Digit5: ["5", "%"],
  Digit6: ["6", "^"],
  Digit7: ["7", "&"],
  Digit8: ["8", "*"],
  Digit9: ["9", "("],
  Digit0: ["0", ")"],
  Minus: ["-", "_"],
  Equal: ["=", "+"],
  Backspace: ["delete", "delete"],
  Tab: ["tab", "tab"],
  KeyQ: ["q", "Q"],
  KeyW: ["w", "W"],
  KeyE: ["e", "E"],
  KeyR: ["r", "R"],
  KeyT: ["t", "T"],
  KeyY: ["y", "Y"],
  KeyU: ["u", "U"],
  KeyI: ["i", "I"],
  KeyO: ["o", "O"],
  KeyP: ["p", "P"],
  BracketLeft: ["[", "{"],
  BracketRight: ["]", "}"],
  Backslash: ["\\", "|"],
  CapsLock: ["caps lock", "caps lock"],
  KeyA: ["a", "A"],
  KeyS: ["s", "S"],
  KeyD: ["d", "D"],
  KeyF: ["f", "F"],
  KeyG: ["g", "G"],
  KeyH: ["h", "H"],
  KeyJ: ["j", "J"],
  KeyK: ["k", "K"],
  KeyL: ["l", "L"],
  Semicolon: [";", ":"],
  Quote: ["'", '"'],
  Enter: ["enter", "enter"],
  ShiftLeft: ["shift", "shift"],
  KeyZ: ["z", "Z"],
  KeyX: ["x", "X"],
  KeyC: ["c", "C"],
  KeyV: ["v", "V"],
  KeyB: ["b", "B"],
  KeyN: ["n", "N"],
  KeyM: ["m", "M"],
  Comma: [",", "<"],
  Period: [".", ">"],
  Slash: ["/", "?"],
  ArrowUp: ["▲", "▲"],
  ShiftRight: ["shift", "shift"],
  ControlLeft: ["ctrl", "ctrl"],
  WIN: ["Win", "Win"],
  AltLeft: ["alt", "alt"],
  Space: [" ", " "],
  AltRight: ["alt", "alt"],
  ControlRight: ["ctrl", "ctrl"],
  ArrowLeft: ["◀", "◀"],
  ArrowDown: ["▼", "▼"],
  ArrowRight: ["▶", "▶"],
};

const russianKeys = {
  Backquote: ["ё", "Ё"],
  Digit1: ["1", "!"],
  Digit2: ["2", '"'],
  Digit3: ["3", "№"],
  Digit4: ["4", ";"],
  Digit5: ["5", "%"],
  Digit6: ["6", ":"],
  Digit7: ["7", "?"],
  Digit8: ["8", "*"],
  Digit9: ["9", "("],
  Digit0: ["0", ")"],
  Minus: ["-", "_"],
  Equal: ["=", "+"],
  Backspace: ["delete", "delete"],
  Tab: ["tab", "tab"],
  KeyQ: ["й", "Й"],
  KeyW: ["ц", "Ц"],
  KeyE: ["у", "У"],
  KeyR: ["к", "К"],
  KeyT: ["е", "Е"],
  KeyY: ["н", "Н"],
  KeyU: ["г", "Г"],
  KeyI: ["ш", "Ш"],
  KeyO: ["щ", "Щ"],
  KeyP: ["з", "З"],
  BracketLeft: ["х", "Х"],
  BracketRight: ["ъ", "Ъ"],
  Backslash: ["/", "|"],
  CapsLock: ["caps lock", "caps lock"],
  KeyA: ["ф", "Ф"],
  KeyS: ["ы", "Ы"],
  KeyD: ["в", "В"],
  KeyF: ["а", "А"],
  KeyG: ["п", "П"],
  KeyH: ["р", "Р"],
  KeyJ: ["о", "О"],
  KeyK: ["л", "Л"],
  KeyL: ["д", "Д"],
  Semicolon: ["ж", "Ж"],
  Quote: ["э", "Э"],
  Enter: ["enter", "enter"],
  ShiftLeft: ["shift", "shift"],
  KeyZ: ["я", "Я"],
  KeyX: ["ч", "Ч"],
  KeyC: ["с", "С"],
  KeyV: ["м", "М"],
  KeyB: ["и", "И"],
  KeyN: ["т", "Т"],
  KeyM: ["ь", "Ь"],
  Comma: ["б", "Б"],
  Period: ["ю", "Ю"],
  Slash: [".", ","],
  ArrowUp: ["▲", "▲"],
  ShiftRight: ["shift", "shift"],
  ControlLeft: ["ctrl", "ctrl"],
  WIN: ["Win", "Win"],
  AltLeft: ["alt", "alt"],
  Space: [" ", " "],
  AltRight: ["alt", "alt"],
  ControlRight: ["ctrl", "ctrl"],
  ArrowLeft: ["◀", "◀"],
  ArrowDown: ["▼", "▼"],
  ArrowRight: ["▶", "▶"],
};
const keyboard = document.getElementById("keyboard");

const textArea = document.querySelector(".textarea");
const addLowerKeys = () => {
  const keys = keyboard.classList.contains("ru") ? russianKeys : englishKeys;
  const keyCodes = Object.keys(keys);
  let keyOut = "";
  keyCodes.forEach((i) => {
    itemIndex = keyCodes.indexOf(i);
    if (
      itemIndex == 14 ||
      itemIndex == 28 ||
      itemIndex == 41 ||
      itemIndex == 54
    ) {
      keyOut += `<br>`;
    }
    keyOut += keys[i][0].match(/delete|tab|CapsLock|enter|shift| /)
      ? `<button type="button" class="keyboard__key keyboard__key_wide" id = "${i}" data="${i}">` +
        keys[i][0] +
        `</button>`
      : `<button type="button" class="keyboard__key" id = "${i}" data="${i}">` +
        keys[i][0] +
        `</button>`;
    keyboard.innerHTML = keyOut;
  });
};
addLowerKeys();
const addUpperKeys = () => {
  const keys = keyboard.classList.contains("ru") ? russianKeys : englishKeys;
  const keyCodes = Object.keys(keys);
  let keyOut = "";
  keyCodes.forEach((i) => {
    itemIndex = keyCodes.indexOf(i);
    if (
      itemIndex == 14 ||
      itemIndex == 28 ||
      itemIndex == 41 ||
      itemIndex == 54
    ) {
      keyOut += `<br>`;
    }
    keyOut += keys[i][0].match(/delete|tab|CapsLock|enter|shift| /)
      ? `<button type="button" class="keyboard__key keyboard__key_wide" id = "${i}" data="${i}">` +
        keys[i][1] +
        `</button>`
      : `<button type="button" class="keyboard__key" id = "${i}" data="${i}">` +
        keys[i][1] +
        `</button>`;
    keyboard.innerHTML = keyOut;
  });
};

const clearKeyboard = () => {
  keyboard.innerHTML = "";
};

keyboard.addEventListener("click", (e) => {
  if (
    e.target.id === "CapsLock" &&
    !e.target.classList.contains("capsLockActive")
  ) {
    addUpperKeys();
    document.getElementById("CapsLock").classList.add("capsLockActive");
  } else if (e.target.classList.contains("capsLockActive")) {
    addLowerKeys();
    document.getElementById("CapsLock").classList.remove("capsLockActive");
  }
});

const specialKeys = [
  "WIN",
  "AltLeft",
  "ControlLeft",
  "ShiftLeft",
  "CapsLock",
  "Tab",
  "Backspace",
  "Enter",
  "ShiftRight",
  "AltRight",
  "ControlRight",
];
keyboard.onmousedown = ({ target: { id, textContent } }) => {
  if (!specialKeys.includes(id)) {
    textArea.value += textContent;
  } else if (id === "Tab") {
    tab();
  } else if (id === "Enter") {
    enter();
  } else if (id === "Backspace") {
    backspace();
  } else if (id === "ShiftLeft" || id === "ShiftRight") {
    addUpperKeys();
  }
};
keyboard.onmouseup = ({ target: { id } }) => {
  if (id === "ShiftLeft" || id === "ShiftRight") {
    addLowerKeys();
  }
};
window.addEventListener("keydown", (e) => {
  if (e.getModifierState("CapsLock")) {
    addUpperKeys();
    document.getElementById("CapsLock").classList.add("capsLockActive");
  } else if (e.shiftKey) {
    addUpperKeys();
  } else {
    addLowerKeys();
  }
});
window.onkeydown = (e) => {
  const keyCode = document.querySelector(`.keyboard__key[data=${e.code}]`);
  if (!specialKeys.includes(e.code) && keyCode) {
    textArea.value += document.querySelector(
      `.keyboard__key[data=${e.code}]`
    ).textContent;

    keyCode.classList.add("active");
  } else if (e.code === "Tab") {
    tab();
  } else if (e.code === "Enter") {
    enter();
  } else if (e.code === "Backspace") {
    backspace();
  }
  if (e.altKey && e.ctrlKey) {
    clearKeyboard();
    if (keyboard.classList.contains("ru")) {
      keyboard.classList.remove("ru");
      keyboard.classList.add("en");
    } else {
      keyboard.classList.add("ru");
      keyboard.classList.remove("en");
    }
    addLowerKeys();
    setLocalStorageLanguage();
  }
};
window.onkeyup = (e) => {
  const keyCode = document.querySelector(`.keyboard__key[data=${e.code}]`);
  if (!specialKeys.includes(e.code) && keyCode) {
    keyCode.classList.remove("active");
  }
  if (e.key === "Shift") {
    addLowerKeys();
  }
};
const backspace = () => {
  textArea.value = textArea.value.substring(0, textArea.value.length - 1);
};
const tab = () => {
  textArea.value += "\t";
};
const enter = () => {
  textArea.value += "\n";
};
function setLocalStorageLanguage() {
  localStorage.setItem("lang", keyboard.className);
}
