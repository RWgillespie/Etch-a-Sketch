//make a grid on the screen
//find the container
let yourNum = prompt('how many rows?');
console.log(yourNum);
let gridRow = '';
for (n=0; n < yourNum; n++) {
    gridRow= gridRow + "auto ";
}
console.log(gridRow);
let gridWidth = (yourNum * 50) + "px";
let container = document.querySelector('.container');
//set the grid to the size you have input
container.style.gridTemplateColumns = gridRow;
container.style.gridTemplateRows= gridRow;
container.style.width= gridWidth;
let item = null;
//fill the grid with little squares to make a perfect square
for (i=0; i < (yourNum * yourNum); i++) {
    item = document.createElement('div' + i);
    item.style.border="solid";
    item.style.width="50px";
    item.style.height="50px";
    container.appendChild(item);
}
container.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor="red";
})
