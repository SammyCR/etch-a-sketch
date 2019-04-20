function createGrid(sideL){
    let gridElementSide = 400/sideL;
    for(let i=0; i<(sideL**2); i++){
        let gridE = document.createElement('div');
        gridE.style.cssText = `height: ${gridElementSide-2}px; width: ${gridElementSide-2}px; border: 1px solid black;`;
        gridE.classList.add('gridElement');
        let container = document.querySelector("#gridContainer");
        container.appendChild(gridE);
    }
    let container = document.querySelector("#gridContainer");
    container.style.cssText = `grid-template-columns: repeat(${sideL}, ${gridElementSide}px); grid-template-rows: repeat(${sideL}, ${gridElementSide}px);`
}
function clearGrid(){
    const gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach((element) => {
        element.classList.remove('color');
    })
}
createGrid(16);

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