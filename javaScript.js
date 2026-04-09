function makeRows(rows, cols) {
  const container = document.getElementById("container");
  // set variable value on container
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  let cell;
  for (let c = 0; c < (rows * cols); c++) {
    cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

document.getElementById("changeQuantity").addEventListener("click", function() {
    let newRows = prompt("How many rows do you want?");
    let newCols = prompt("How many columns do you want?");
    makeRows(newRows, newCols);
}); 