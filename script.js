// TODO:
// everytime click remove grid
// 
// 
// 


const topDiv = document.querySelector(".top");

// container div
const containerDiv = document.querySelector(".container");

// create error div to easily remove old message
const errorDiv = document.createElement("div");
errorDiv.className = "errorDiv";

// add error div to top div
topDiv.appendChild(errorDiv);


// const innerContainer = document.querySelector(".innerDiv");

const inputBox = document.querySelector("#gridSize");
const inputButton = document.querySelector("#sizeButton");

let gridSize;
makeGrid(10);



const clickSize = inputButton.addEventListener("click", (e) => {
    gridSize = inputBox.value;
    if (inputBox.value > 20 || inputBox.value < 5) {
        if (errorDiv.contains(document.querySelector("#errorMessage"))) {
            errorDiv.innerHTML = "";
        }
        console.log(2);
        showIncorrectValue();
    } else {
        errorDiv.innerHTML = "";
        containerDiv.innerHTML = "";
        makeGrid(gridSize);
    }
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

const showIncorrectValue = function () {
    const errorMessage = document.createElement("H4");
    errorMessage.setAttribute("id", "errorMessage");
    errorMessage.textContent = "Must Input Between 10 and 20! :)";
    errorDiv.appendChild(errorMessage);
}


