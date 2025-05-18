const container = document.querySelector(".sketchContainer");



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
    box.addEventListener("mouseover", () => {
        box.classList.remove("defaultStateBox");
        box.classList.add("coloredStateBox");
    });
});