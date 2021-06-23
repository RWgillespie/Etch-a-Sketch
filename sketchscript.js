//make a grid on the screen
//ask how big the screen will be
//let yourNum = prompt('how many rows?');
let yourNum=16;
console.log(yourNum);
if (yourNum < 100) {
let gridRow = '';
//set the number of template rows IAW user request
for (n=0; n < yourNum; n++) {
    gridRow= gridRow + "auto ";
}
//seeting the container width
let gridWidth = (yourNum * 50) + "px";
//finding the container
let container = document.querySelector('.container');
//set the grid size and then shrink the div to that size, and make the squares white
container.style.gridTemplateColumns = gridRow;
container.style.gridTemplateRows= gridRow;
container.style.width= gridWidth;
container.style.backgroundColor="white";
let item = null;
//fill the grid with little squares to make a perfect square
for (i=0; i < (yourNum * yourNum); i++) {
    item = document.createElement('div' + i);
    //item.style.border="solid";
    item.style.width="50px";
    item.style.height="50px";
    container.appendChild(item);
}
//set a function that turns the squares red when you overlay them
container.addEventListener('mouseover', function(e){
     e.target.style.backgroundColor="red";
})

} else {alert("Your number is too big. Please refresh");}


const buttons = document.getElementById('bigredbutton');
