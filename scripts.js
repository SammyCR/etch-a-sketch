function createGrid(sideL){ //A function to create a grid with side length sideL
    let gridElementSide = 400/sideL;
    for(let i=0; i<(sideL**2); i++){
        let gridE = document.createElement('div');
        gridE.style.cssText = `height: ${gridElementSide-2}px; width: ${gridElementSide-2}px; border: 1px solid gray; filter: brightness(100%); background-color: white;`;
        gridE.classList.add('gridElement');
        let container = document.querySelector("#gridContainer");
        container.appendChild(gridE);
    }
    let container = document.querySelector("#gridContainer");
    container.style.cssText = `grid-template-columns: repeat(${sideL}, ${gridElementSide}px); grid-template-rows: repeat(${sideL}, ${gridElementSide}px);`
}
function clearGrid(){ //A function that gets rid of the class that changes the color of a grid element
    const gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach((element) => {
        element.classList.remove('color');
    })
    let container = document.querySelector("#gridContainer");
    container.innerHTML = "";
}

createGrid(16);

function selectColor(gridElement){ //Sets the color of the sketch based on radio buttons
    let blackButtonC = document.getElementById("blackButton").checked;
    let randomButtonC = document.getElementById("randomButton").checked;
    let darkenButtonC = document.getElementById("darkenButton").checked;
    if(blackButtonC === true){
        //Black grid elements
        //gridElement.classList.add('color');
        //gridElement.style.backgroundColor = 'black';
        //gridElement.style.filter = 'brightness(100%);';
        gridElement.setAttribute('style', 'background-color: black; filter: brightness(100%); border: 1px solid gray;');
    }
    else if(randomButtonC === true){
        //Random color grid elements
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        //gridElement.style.backgroundColor = `#${randomColor}`;
        //gridElement.style.filter = 'brightness(100%);';
        gridElement.setAttribute('style', `background-color: #${randomColor}; filter: brightness(100%); border: 1px solid gray;`);
    }
    else{
        //darken
        let style = window.getComputedStyle(gridElement);
        let filterVal = style.getPropertyValue('filter')
        let start = filterVal.indexOf('(') + 1;
        let end = filterVal.indexOf(')')
        let brightnessVal = filterVal.slice(start, end);
        gridElement.style.filter = `brightness(${brightnessVal-.1})`;
    }
}

function addGridEListener(){ //A function that adds a mouseenter event listener to each grid element
    const gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach((element) => { //Adds mouseenter event listener to each grid element
        element.addEventListener('mouseenter', () => {
            //element.classList.add('color');
            selectColor(element);
        })
    })
}
addGridEListener();

let clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', () => { //Event listener that if the clear button is clicked, runs clearGrid()
    clearGrid();
    let numSides;
    while(true){ //Keeps asking the user for a new side length until they enter a number within the given range
        let newNumSidesRaw = prompt("Enter a new grid side length from 1-100", "16")
        numSides = parseInt(newNumSidesRaw);
        if(numSides <= 100){
            break;
        }
    }
    createGrid(numSides);
    addGridEListener();
})