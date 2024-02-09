

// TODO:
// make 16x16 grid from js
// find loop and make by appedning
// 
// 


const containerDiv = document.querySelector(".container");


for (let i = 0; i < 16; i++) {

    const row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < 16; j++) {
        const smallDiv = document.createElement("div");
        smallDiv.className = "blocks";

        row.appendChild(smallDiv);
    }

    containerDiv.appendChild(row);
}



