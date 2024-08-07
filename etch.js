const grid = document.querySelector(".grid");
const sliderValue = document.querySelector(".slider");

document.addEventListener("DOMContentLoaded", () => {
    initializeGrid();
});

function initializeGrid() {
    const cellCount = sliderValue.value;
    const gridStyles = window.getComputedStyle(grid);
    const gridSize = parseInt(gridStyles.width);

    for (let i = 0; i < cellCount * cellCount; i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = `${(gridSize / cellCount)}px`;
        gridCell.style.height = `${(gridSize / cellCount)}px`;
        gridCell.classList.add("grid-cell");
        grid.appendChild(gridCell);
        
    }
}