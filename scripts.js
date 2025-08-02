function createGrid() {
    const grid = document.querySelector(".grid")
    for (let i = 0; i < 256; i++) {
        let box = document.createElement("div")
        box.setAttribute("class", "box")
        grid.appendChild(box)
    }
}
createGrid()