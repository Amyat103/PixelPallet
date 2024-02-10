

// TODO:
// everytime click remove grid
// 
// 
// 
// container div
const containerDiv = document.querySelector(".container");


// const innerContainer = document.querySelector(".innerDiv");

const inputBox = document.querySelector("#gridSize");
const inputButton = document.querySelector("#sizeButton");

let gridSize;
makeGrid(10);



const clickSize = inputButton.addEventListener("click", (e) => {
    gridSize = inputBox.value;
    containerDiv.innerHTML = "";
    makeGrid(gridSize);
})

console.log(gridSize);


function makeGrid(gridSize) {
    // temp div to remove easily
    const innerContainer = document.createElement("div");
    innerContainer.className = "innerDiv";

    for (let i = 0; i < gridSize; i++) {

        const row = document.createElement("div");
        row.className = "row";
    
        for (let j = 0; j < gridSize; j++) {
            const smallDiv = document.createElement("div");
            smallDiv.className = "blocks";
    
            row.appendChild(smallDiv);
        }
        
        // row by row
        innerContainer.appendChild(row);
    }
    // append the whole thing
    containerDiv.append(innerContainer);
}




