//make a grid on the screen
//find the container
let container = document.querySelector('.container');
container.style.gridTemplateColumns = "auto auto auto auto";
let item = null;
for (i=0; i <12; i++) {
    item = document.createElement('div' + i);
    item.style.border="solid";
    item.style.width="50px";
    item.style.height="50px";
    container.appendChild(item);
}
