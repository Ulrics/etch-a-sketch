const container = document.querySelector(".sketchContainer");
let currentMode = "black";

function buildGrid(size){
    for(let r = 0; r < size; r++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let i = 0; i < size; i++){
            const box = document.createElement("div");
            box.classList.add("defaultStateBox");
            row.appendChild(box);
    }
    }
}

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


buildGrid(16);
let boxes = document.querySelectorAll(".defaultStateBox");

/*
function colorItBlack(colorItem){
    colorItem.classList.remove("defaultStateBox");
    colorItem.classList.add("coloredStateBox");
}
boxes.forEach((box) => {
    box.addEventListener("mouseover", () => colorItBlack(box));
});
*/

boxes.forEach((box) => {
    let black = () => {
        box.classList.remove("defaultStateBox");
        box.classList.add("coloredStateBox");
    };

    box.addEventListener("mouseover", black);
});

const changeGrid = document.querySelector(".changeGridButton");
changeGrid.addEventListener("click", () =>{
    let newGrid = prompt("Enter new grid size (max 100)", 16);
    if (newGrid < 101){
        const rowList = document.querySelectorAll(".row");
        rowList.forEach((row) => {
            row.remove();
        })
        buildGrid(newGrid);
        let boxes = document.querySelectorAll(".defaultStateBox");
        boxes.forEach((box) => {
            box.addEventListener("mouseover", () => {
                box.classList.remove("defaultStateBox");
                box.classList.add("coloredStateBox");
            });
        });
    }
    else{
        alert("Error: greater than 100 or not a single integer.");
    }
})

const colorItBlack = document.getElementById("black");
const colorItRainbow = document.getElementById("rainbow");
const colorItTint = document.getElementById("tint");


colorItRainbow.addEventListener("click",() => {
    console.log("rainbow triggered");
    colorItRainbow.classList.remove("unselectedToggle");
    colorItRainbow.classList.add("selectedToggle");
    colorItBlack.classList.remove("selectedToggle");
    colorItBlack.classList.add("unselectedToggle");
    colorItTint.classList.remove("selectedToggle");
    colorItTint.classList.add("unselectedToggle");

    boxes.forEach((box) =>{
        box.removeEventListener("mouseover", black)
        box.addEventListener("mouseover", () =>{
            box.style.backgroundColor = randomRGB();
        })
    })
})

