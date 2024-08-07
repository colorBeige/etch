const grid = document.querySelector(".grid");
const sliderValue = document.querySelector(".slider");
const colorValue = document.querySelector(".color-picker");

document.addEventListener("DOMContentLoaded", () => {
    createGrid();
});

sliderValue.addEventListener("change", () => {
    resizeGrid();
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
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

        newGridCell.addEventListener("mousedown", () => {
            mouseDown = true;
            newGridCell.style.backgroundColor = colorValue.value;
        });

        newGridCell.addEventListener("mouseover", () => {
            if (mouseDown) {
                newGridCell.style.backgroundColor = colorValue.value;
            }
        });

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
