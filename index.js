function addMainElement() {
  const main = document.createElement("main");
  main.className = "main";
  let template = "";
  template += `<h1 class="title">Виртуальная клавиатура</h1>`;
  template += `<textarea class="textarea"></textarea>`;
  template += `<div class="keyboard" id="keyboard"></div>`;
  template += `<p class="paragraf">Клавиатура создана в операционной системе Windows<br />Для переключения языка комбинация: левыe ctrl + alt</p>`;
  document.body.append(main);
  document.querySelector(".main").innerHTML = template;
}
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
  ArrowUp: "▲",
  ShiftRight: ["shift", "shift"],
  ControlLeft: ["ctrl", "ctrl"],
  WIN: ["Win", "Win"],
  AltLeft: ["alt", "alt"],
  Space: [" ", " "],
  AltRight: ["alt", "alt"],
  ControlRight: ["ctrl", "ctrl"],
  ArrowLeft: "◀",
  ArrowDown: "▼",
  ArrowRight: "▶",
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
  KeyA: ["ф", "ф"],
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
  ShiftLeft: "shift",
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
  ArrowUp: "▲",
  ShiftRight: ["shift", "shift"],
  ControlLeft: ["ctrl", "ctrl"],
  WIN: ["Win", "Win"],
  AltLeft: ["alt", "alt"],
  Space: [" ", " "],
  AltRight: ["alt", "alt"],
  ControlRight: ["ctrl", "ctrl"],
  ArrowLeft: "◀",
  ArrowDown: "▼",
  ArrowRight: "▶",
};

let keys = englishKeys;
function addKeys() {
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
    document.querySelector(".keyboard").innerHTML = keyOut;
  });
}
addKeys();
let keyValue = document.querySelectorAll(".keyboard__key");
let textArea = document.querySelector(".textarea");
keyValue.forEach((e) => {
  e.onclick = () => {
    if (
      e.id !== "AltLeft" &&
      e.id !== "WIN" &&
      e.id !== "ControlLeft" &&
      e.id !== "ShiftLeft" &&
      e.id !== "CapsLock" &&
      e.id !== "Tab" &&
      e.id !== "Backspace" &&
      e.id !== "Enter" &&
      e.id !== "ShiftRight" &&
      e.id !== "ArrowUp" &&
      e.id !== "ArrowDown" &&
      e.id !== "ArrowLeft" &&
      e.id !== "ArrowRight" &&
      e.id !== "AltRight" &&
      e.id !== "ControlRight"
    ) {
      textArea.textContent += e.textContent;
    }
  };
});

const keysHandler = (e) => {
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
    e.code !== "ArrowUp" &&
    e.code !== "ArrowDown" &&
    e.code !== "ArrowLeft" &&
    e.code !== "ArrowRight" &&
    e.code !== "AltRight" &&
    e.code !== "ControlRight"
  ) {
    textArea.textContent += e.key;
  }
  document
    .querySelector(".keyboard__key[data=" + e.code + "]")
    .classList.add("active");
};
window.addEventListener("keydown", keysHandler);
window.addEventListener("keyup", removeClass);
function removeClass() {
  keyValue.forEach((e) => {
    e.classList.remove("active");
  });
}
