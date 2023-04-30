const addMainElement = () => {
  const main = document.createElement("main");
  main.className = "main";
  let template = "";
  template += `<h1 class="title">Виртуальная клавиатура</h1>`;
  template += `<textarea class="textarea"></textarea>`;
  if (localStorage.getItem("lang")) {
    template += `<div class="${localStorage.lang}" id="keyboard"></div>`;
  } else {
    template += `<div class="ru" id="keyboard"></div>`;
  }

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

let textArea = document.querySelector(".textarea");
const addLowerKeys = () => {
  if (keyboard.classList.contains("ru")) {
    let keys = russianKeys;
    let keyCodes = Object.keys(keys);
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
      if (keys[i][0].match(/delete|tab|CapsLock|enter|shift| /)) {
        keyOut +=
          `<button type="button" class="keyboard__key keyboard__key_wide" id = "${i}" data="${i}">` +
          keys[i][0] +
          `</button>`;
      } else {
        keyOut +=
          `<button type="button" class="keyboard__key" id = "${i}" data="${i}">` +
          keys[i][0] +
          `</button>`;
      }
      keyboard.innerHTML = keyOut;
    });
  } else {
    let keys = englishKeys;
    let keyCodes = Object.keys(keys);
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
      if (keys[i][0].match(/delete|tab|CapsLock|enter|shift| /)) {
        keyOut +=
          `<button type="button" class="keyboard__key keyboard__key_wide" id = "${i}" data="${i}">` +
          keys[i][0] +
          `</button>`;
      } else {
        keyOut +=
          `<button type="button" class="keyboard__key" id = "${i}" data="${i}">` +
          keys[i][0] +
          `</button>`;
      }
      keyboard.innerHTML = keyOut;
    });
  }
};
addLowerKeys();
const addUpperKeys = () => {
  if (keyboard.classList.contains("ru")) {
    let keys = russianKeys;
    let keyCodes = Object.keys(keys);
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
      if (keys[i][0].match(/delete|tab|CapsLock|enter|shift| /)) {
        keyOut +=
          `<button type="button" class="keyboard__key keyboard__key_wide" id = "${i}" data="${i}">` +
          keys[i][1] +
          `</button>`;
      } else {
        keyOut +=
          `<button type="button" class="keyboard__key" id = "${i}" data="${i}">` +
          keys[i][1] +
          `</button>`;
      }
      keyboard.innerHTML = keyOut;
    });
  } else {
    let keys = englishKeys;
    let keyCodes = Object.keys(keys);
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
      if (keys[i][0].match(/delete|tab|CapsLock|enter|shift| /)) {
        keyOut +=
          `<button type="button" class="keyboard__key keyboard__key_wide" id = "${i}" data="${i}">` +
          keys[i][1] +
          `</button>`;
      } else {
        keyOut +=
          `<button type="button" class="keyboard__key" id = "${i}" data="${i}">` +
          keys[i][1] +
          `</button>`;
      }
      keyboard.innerHTML = keyOut;
    });
  }
};

const clearKeyboard = () => {
  keyboard.innerHTML = "";
};

window.addEventListener("keydown", function (e) {
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
  if (e.getModifierState("CapsLock")) {
    addUpperKeys();
    document.getElementById("CapsLock").classList.add("capsLockActive");
  } else {
    addLowerKeys();
  }
});

keyboard.onclick = (e) => {
  let target = e.target;
  if (
    target.id !== "WIN" &&
    target.id !== "AltLeft" &&
    target.id !== "ControlLeft" &&
    target.id !== "ShiftLeft" &&
    target.id !== "CapsLock" &&
    target.id !== "Tab" &&
    target.id !== "Backspace" &&
    target.id !== "Enter" &&
    target.id !== "ShiftRight" &&
    // target.id !== "ArrowUp" &&
    // target.id !== "ArrowDown" &&
    // target.id !== "ArrowLeft" &&
    // target.id !== "ArrowRight" &&
    target.id !== "AltRight" &&
    target.id !== "ControlRight"
  ) {
    textArea.textContent += target.textContent;
  }
};
let keyValue = document.querySelectorAll(".keyboard__key");

window.onkeydown = (e) => {
  const pressedKey = document.querySelector(
    ".keyboard__key[data=" + e.code + "]"
  );
  if (
    e.code !== "AltLeft" &&
    e.code !== "WIN" &&
    e.code !== "ControlLeft" &&
    e.code !== "ShiftLeft" &&
    e.code !== "CapsLock" &&
    e.code !== "Tab" &&
    e.code !== "Backspace" &&
    e.code !== "Enter" &&
    e.code !== "ShiftRight" &&
    // e.code !== "ArrowUp" &&
    // e.code !== "ArrowDown" &&
    // e.code !== "ArrowLeft" &&
    // e.code !== "ArrowRight" &&
    e.code !== "AltRight" &&
    e.code !== "ControlRight"
  ) {
    textArea.textContent += pressedKey.textContent;
  }
  pressedKey.classList.add("active");
};
window.onkeyup = (e) => {
  const pressedKey = document.querySelector(
    ".keyboard__key[data=" + e.code + "]"
  );
  pressedKey.classList.remove("active");
};

function setLocalStorageLanguage() {
  localStorage.setItem("lang", keyboard.className);
}
window.addEventListener("beforeunload", setLocalStorageLanguage);
// function getLocalStorageLanguage() {
//   if (localStorage.getItem("lang")) {
//     let langFromLocalStore = localStorage.lang;
//     keyboard.classList.add(langFromLocalStore);
//   }
// }
window.addEventListener("beforeunload", setLocalStorageLanguage);
// window.addEventListener("load", getLocalStorageLanguage);
