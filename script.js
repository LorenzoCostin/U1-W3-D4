let numT = [];
const numArr = [];
for (let i = 1; i <= 76; i++) {
  numT.push(i);
}
console.log(numT);
const createNums = function (nums) {
  const tombolaN = document.getElementById("tombolaN");
  for (let i = 0; i < numT; i++) {
    numArr.push([]);
    const numCellDiv = document.createElement("div");

    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;
    numCellDiv.appendChild(cellValue);
    tombolaN.appendChild(numCellDiv);
  }
};
