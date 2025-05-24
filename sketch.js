const container = document.querySelector(".sketchContainer");

function buildGrid(size){
    for(let r = 0; r < size; r++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let i = 0; i < size; i++){
            const box = document.createElement("div");
            box.classList.add("gridBox");
            row.appendChild(box);                           
    }
    }
    const boxes = document.querySelectorAll(".gridBox");
        boxes.forEach((box) => {
            if (currentMode === "black"){
                box.addEventListener("mouseover", black);
            }
            else if(currentMode === "rainbow"){
                box.addEventListener("mouseover", rainbow);
            }
            else if(currentMode === "tint"){
                box.addEventListener("mouseover", tint);
            }
        });
}

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function black(){
    this.style.backgroundColor = "black";
}

function rainbow(){
    this.style.backgroundColor = randomRGB();
}

function tint(){
    let currentOpacity = parseFloat(this.dataset.opacity) || 0;
    if (currentOpacity < 1){
        currentOpacity += 0.1;
        this.dataset.opacity = currentOpacity;
        this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
    }
}

function changeStyle(newStyle){
    const boxes = document.querySelectorAll(".gridBox");
    boxes.forEach((box) =>{
            box.removeEventListener("mouseover", black);
            box.removeEventListener("mouseover", rainbow);
            box.removeEventListener("mouseover", tint);
            box.addEventListener("mouseover", newStyle);
        });
}

function changeGrid(){
    let newGrid = prompt("Enter new grid size (max 100)", 16);
    
    if (newGrid < 101){
        const rowList = document.querySelectorAll(".row");
        rowList.forEach((row) => {
            row.remove();
        });
        buildGrid(newGrid);
        const boxes = document.querySelectorAll(".gridBox");
        boxes.forEach((box) => {
            if (currentMode === "black"){
                box.addEventListener("mouseover", black);
            }
            else if(currentMode === "rainbow"){
                box.addEventListener("mouseover", rainbow);
            }
            else if(currentMode === "tint"){
                box.addEventListener("mouseover", tint);
            }
        });
    }
    else{
        alert("Error: greater than 100 or not a single integer.");
    }
}

let currentMode = "black";
buildGrid(16);

const changeGridButton = document.querySelector(".changeGridButton");
changeGridButton.addEventListener("click", changeGrid);

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
    currentMode = "rainbow";
    changeStyle(rainbow);
});

colorItBlack.addEventListener("click", () =>{
    console.log("black triggered");
    colorItBlack.classList.remove("unselectedToggle");
    colorItBlack.classList.add("selectedToggle");
    colorItRainbow.classList.remove("selectedToggle");
    colorItRainbow.classList.add("unselectedToggle");
    colorItTint.classList.remove("selectedToggle");
    colorItTint.classList.add("unselectedToggle");
    currentMode = "black";
    changeStyle(black);
});

colorItTint.addEventListener("click", () =>{
    console.log("tint triggered");
    colorItTint.classList.remove("unselectedToggle");
    colorItTint.classList.add("selectedToggle");
    colorItRainbow.classList.remove("selectedToggle");
    colorItRainbow.classList.add("unselectedToggle");
    colorItBlack.classList.remove("selectedToggle");
    colorItBlack.classList.add("unselectedToggle");
    currentMode = "tint";
    changeStyle(tint);
});