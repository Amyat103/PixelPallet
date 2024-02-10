

// TODO:
// make 16x16 grid from js
// find loop and make by appedning
// 
// 

const inputBox = document.querySelector("#gridSize");
const inputButton = document.querySelector("#sizeButton");

let gridSize = 0;

const clickSize = inputButton.addEventListener("click", (e) => {
    gridSize = inputBox.value;
    makeGrid(gridSize);
})

console.log(gridSize);


const containerDiv = document.querySelector(".container");

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {

        const row = document.createElement("div");
        row.className = "row";
    
        for (let j = 0; j < gridSize; j++) {
            const smallDiv = document.createElement("div");
            smallDiv.className = "blocks";
    
            row.appendChild(smallDiv);
        }
    
        containerDiv.appendChild(row);
    }
}




