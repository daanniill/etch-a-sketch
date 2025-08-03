function createGrid() {
    const grid = document.querySelector(".grid")
    for (let i = 0; i < 256; i++) {
        let box = document.createElement("div")
        box.setAttribute("class", "box")
        grid.appendChild(box)
    }
}

function hover() {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        });
    });
}
createGrid()
hover()