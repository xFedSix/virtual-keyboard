function addMainElement() {
  const main = document.createElement("main");
  main.className = "main";
  let template = "";
  template += `<h1 class="title">Виртуальная клавиатура</h1>`;
  template += `<textarea class="textarea"></textarea>`;
  template += `<div class="keyboard"></div>`;
  template += `<p class="paragraf">Text<br />Text</p>`;
  document.body.append(main);
  document.querySelector(".main").innerHTML = template;
}
addMainElement();

const keyboard = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "backspace",
  "tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "caps",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "enter",
  "shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "?",
  "shift",
  "ctrl",
  "windows",
  "alt",
  "space",
  "alt",
  "ctrl",
];
function addKeys() {
  const addKeys = document.createDocumentFragment();
  let keyOut = "";
  for (let i = 0; i < keyboard.length; i++) {
    if (i == 12 || i == 23 || i == 34 || i == 45) {
      keyOut += `<br></br>`;
    }
    keyOut +=
      `<button type="button" class="keyboard__key">` +
      keyboard[i] +
      `</button>`;
    document.querySelector(".keyboard").innerHTML = keyOut;
  }
}
addKeys();
