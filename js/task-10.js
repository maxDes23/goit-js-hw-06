const controlsDiv = document.querySelector("#controls");
const input = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.valueAsNumber;
  const boxSize = 30;
  let boxesMarkup = "";

  for (let i = 0; i < amount; i++) {
    const size = boxSize + i * 10;
    const backgroundColor = getRandomHexColor();
    const box = `<div style="width:${size}px; height:${size}px; background-color:${backgroundColor}"></div>`;
    boxesMarkup += box;
  }

  boxesDiv.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
