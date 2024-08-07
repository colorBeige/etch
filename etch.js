const grid = document.querySelector(".grid");
const sliderValue = document.querySelector(".slider");
const colorValue = document.querySelector(".color-picker");
const rainbowButton = document.querySelector(".rainbow");

document.addEventListener("DOMContentLoaded", () => {
    createGrid();
});

sliderValue.addEventListener("change", () => {
    resizeGrid();
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
});

document.addEventListener("mousedown", (e) => {
    mouseDown = true;
    if (e.target.classList.contains("grid-cell")) {
        colorCell(e);
    }
});

document.addEventListener("mouseover", (e) => {
    if (mouseDown && e.target.classList.contains("grid-cell")) {
        colorCell(e);
    }
});

let toggleRainbow = false;

rainbowButton.addEventListener("click", () => {
    toggleRainbow = toggleRainbow ? false : true;
});

let mouseDown = false;

function createGrid() {
    const cellCount = sliderValue.value;
    const gridStyles = window.getComputedStyle(grid);
    const gridSize = parseInt(gridStyles.width);
    const cellSize = gridSize / cellCount;

    for (let i = 0; i < cellCount * cellCount; i++) {
        const newGridCell = document.createElement("div");
        newGridCell.style.width = `${cellSize}px`;
        newGridCell.style.height = `${cellSize}px`;
        newGridCell.classList.add("grid-cell");

        grid.appendChild(newGridCell);
    }
}

function resizeGrid() {
    //Removes all previous cells
    const prevCellCount = grid.querySelectorAll(".grid-cell");
    prevCellCount.forEach(gridCell => {
        grid.removeChild(gridCell);
    })

    createGrid();
}

function colorCell(e) {
    if (toggleRainbow) {
        e.target.style.backgroundColor = `rgb(${rgbValue()}, ${rgbValue()}, ${rgbValue()})`;
    } else {
        e.target.style.backgroundColor = colorValue.value;
    }
 }

 function rgbValue() {
    return Math.floor(Math.random() * 256);
 }