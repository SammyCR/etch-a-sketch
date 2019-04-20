function create16Grid(){
    for(let i=0; i<(256); i++){
        let gridE = document.createElement('div');
        let gridElementSide = 400/16;
        gridE.style.cssText = `height: ${gridElementSide-2}px; width: ${gridElementSide-2}px; border: 1px solid black;`;
        gridE.classList.add('gridElement');
        let container = document.querySelector("#gridContainer");
        container.appendChild(gridE);
    }
    let container = document.querySelector("#gridContainer");
    container.style.cssText = `grid-template-columns: repeat(16, 25px); grid-template-rows: repeat(16, 25px);`
}
function clearGrid(){
    const gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach((element) => {
        element.classList.remove('color');
    })
}
create16Grid();

const gridElements = document.querySelectorAll(".gridElement");
gridElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('color');
    })
})

let clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', () => {
    clearGrid();
})