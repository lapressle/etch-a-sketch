const container = document.querySelector('#container');

function makeGrid (gridSize) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    for (let n = 0; n<gridSize; n++) {
        let gridLine = document.createElement('div');
        gridLine.classList.add('gridLine');
        let setHeight = 960/gridSize;
        let setWidth = 960/gridSize;
        gridLine.style.minHeight = setHeight+'px';
        container.appendChild(gridLine);
        for (let i = 0; i<gridSize; i++) {
            let gridBox = document.createElement('div');
            gridBox.classList.add('gridBox');
            gridLine.appendChild(gridBox)
    
        }
    }
    let grid = document.querySelectorAll('.gridBox');
    grid.forEach((element) => element.addEventListener('mouseover', () => element.style.backgroundColor = 'red'))
    grid.forEach((element) => element.addEventListener('mouseout', () => element.style.borderColor = 'black'))
}

makeGrid(22);

const gridButton = document.querySelector('button');

gridButton.addEventListener('click', () => makeGrid(prompt('What size would you like?')));

let grid = document.querySelectorAll('.gridBox');
grid.forEach((element) => element.addEventListener('mouseover', () => element.style.backgroundColor = 'red'))
grid.forEach((element) => element.addEventListener('mouseout', () => element.style.borderColor = 'black'))
