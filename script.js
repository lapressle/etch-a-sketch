const container = document.querySelector('#container');

for (let n = 0; n<16; n++) {
    let gridLine = document.createElement('div');
    gridLine.classList.add('gridLine');
    container.appendChild(gridLine);
    for (let i = 0; i<16; i++) {
        let gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        gridLine.appendChild(gridBox)

    }
}

let grid = document.querySelectorAll('.gridBox');
grid.forEach((element) => element.addEventListener('mouseover', () => element.style.borderColor = 'red'))
grid.forEach((element) => element.addEventListener('mouseout', () => element.style.borderColor = 'black'))
