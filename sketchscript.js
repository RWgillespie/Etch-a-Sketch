//make a grid on the screen
//find the container
let yourNum = prompt('how many rows?');
console.log(yourNum);
let gridRow = '';
for (n=0; n < yourNum; n++) {
    gridRow= gridRow + "auto ";
}
console.log(gridRow);
let container = document.querySelector('.container');
container.style.gridTemplateColumns = gridRow;
container.style.gridTemplateRows= gridRow;
let item = null;
for (i=0; i < (yourNum * yourNum); i++) {
    item = document.createElement('div' + i);
    item.style.border="solid";
    item.style.width="50px";
    item.style.height="50px";
    container.appendChild(item);
}
