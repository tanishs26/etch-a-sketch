const container = document.querySelector(".container");
container.innerHTML = "";
function createGrid(row, colm) {
  for (i = 0; i < row; i++) {
    const rowGrid = document.createElement("div");
    rowGrid.classList.add("row-grid");
    container.appendChild(rowGrid);

    for (j = 0; j < colm; j++) {
      const colGrid = document.createElement("div");
      colGrid.classList.add("col-grid");
      colGrid.textContent=``
      rowGrid.appendChild(colGrid);
    }
  }
}
createGrid(16, 16);
