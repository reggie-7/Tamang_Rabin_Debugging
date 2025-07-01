console.log("JavaScript File is linked");

//variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
const resetBtn = document.getElementById("reset-btn");
const labelBox = document.getElementById("label-box");
let currentDraggedElement = null;

//functions

function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
    console.log(currentDraggedElement);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    if (this.children.length > 0) {
    console.log("Drop zone already contains a label.");
    return;
}
    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}

function resetGame() {
    const placedLabels = document.querySelectorAll(".label");
    placedLabels.forEach(label => labelBox.appendChild(label));
}

//Event listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(target => {
    target.addEventListener("dragover", dragOver);
    target.addEventListener("drop", drop);
});

resetBtn.addEventListener("click", resetGame);
