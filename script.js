const salida = document.getElementById("salida");
const color = document.querySelector("#color");
const saveButton = document.getElementById("saveButton");
const colorPalettes = document.getElementById("colorPalettes");
const colorCounter = document.getElementById("colorCounter"); // Contador

let palettes = JSON.parse(localStorage.getItem("colorPalettes")) || [];

const displayPalettes = () => {
  colorPalettes.innerHTML = ""; 

  palettes.forEach((value) => {
    const paletteDiv = document.createElement("div");
    paletteDiv.className = "palette";
    paletteDiv.style.background = value;

    const textSpan = document.createElement("span");
    textSpan.className = "palette-text";
    textSpan.textContent = value;

    paletteDiv.appendChild(textSpan);
    colorPalettes.appendChild(paletteDiv);
  });

  updateColorCounter(); 
};

const updateColorCounter = () => {
  colorCounter.textContent = `Colores guardados: ${palettes.length}`;
};

const setcolor = () => {
  const value = color.value;
  salida.textContent = value;
  salida.style.background = value;
  salida.style.color = "#fff";
};

const saveColor = () => {
  const value = color.value;
  if (!palettes.includes(value)) { 
    palettes.push(value);
    localStorage.setItem("colorPalettes", JSON.stringify(palettes));
    displayPalettes(); 
  }
};

setcolor();
displayPalettes();

color.addEventListener("input", setcolor);
saveButton.addEventListener("click", saveColor);
