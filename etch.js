const grid = document.querySelector(".grid");
const sliderValue = document.querySelector(".slider");

document.addEventListener("DOMContentLoaded", () => {
    initializeGrid();
});

function initializeGrid() {
    let gridSize = sliderValue.value;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        grid.appendChild(gridElement);
        
    }
}