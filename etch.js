const grid = document.querySelector(".grid");
const sliderValue = document.querySelector(".slider");

document.addEventListener("DOMContentLoaded", () => {
    createGrid();
});

sliderValue.addEventListener("change", () => {
    resizeGrid();
});

function createGrid() {
    const cellCount = sliderValue.value;
    const gridStyles = window.getComputedStyle(grid);
    const gridSize = parseInt(gridStyles.width);
    const cellSize = gridSize / cellCount;

    for (let i = 0; i < cellCount * cellCount; i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = `${cellSize}px`;
        gridCell.style.height = `${cellSize}px`;
        gridCell.classList.add("grid-cell");
        grid.appendChild(gridCell);
        
    }
}

function resizeGrid() {
    //Removes all previous cells
    const prevCellCount = grid.querySelectorAll(".grid-cell");
    prevCellCount.forEach(cell => {
        grid.removeChild(cell);
    })

    createGrid();
}
