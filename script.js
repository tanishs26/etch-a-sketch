const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
let rainbowButton = document.querySelector(".rainbow");
rainbowEnabled = false;
deleteEnabled = false;
rainbowButton.addEventListener("click", () => {
  rainbowEnabled = !rainbowEnabled;
  if (rainbowEnabled) {
    rainbowButton.textContent = "Enabled";
  } else {
    rainbowButton.textContent = "Disabled";
  }
});

const btn2 = document.createElement("button");
btn2.textContent = "Eraser";
btn2.classList.add("btn2");
document.body.appendChild(btn2);
btn2.addEventListener("click", () => {
  deleteEnabled = !deleteEnabled;
});

btn.addEventListener("click", () => {
  var size = prompt("Enter the size of Grid less than 100");
  size = parseInt(size);
  if (isNaN(size) || size < 0 || size >= 100) {
    alert("Game aborted");
    return;
  }
  createGrid(size, size);
});

function createGrid(row, colm) {
  container.innerHTML = "";

  for (i = 0; i < row; i++) {
    const rowGrid = document.createElement("div");
    rowGrid.classList.add("row-grid");
    container.appendChild(rowGrid);

    for (j = 0; j < colm; j++) {
      const colGrid = document.createElement("div");
      colGrid.classList.add("col-grid");
      rowGrid.appendChild(colGrid);
      colGrid.style.width = 400 / colm + "px";
      colGrid.style.height = 400 / colm + "px";
      colGrid.addEventListener("mouseover", () => {
        if (rainbowEnabled) {
          let r = Math.floor(Math.random() * 255);
          let g = Math.floor(Math.random() * 255);
          let b = Math.floor(Math.random() * 255);
          colGrid.style.backgroundColor = `rgb(${r},${g},${b})`;
        } else if (deleteEnabled) {
          colGrid.style.backgroundColor = "white";
        } else {
          colGrid.style.backgroundColor = "black";
        }
      });
    }
  }
}
