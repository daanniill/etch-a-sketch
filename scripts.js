function createGrid(grid_size) {
    let box_num = grid_size * grid_size
    let box_size = 640 / grid_size
    const grid = document.querySelector(".grid")
    for (let i = 0; i < box_num; i++) {
        let box = document.createElement("div")
        box.style.width = `${box_size}px`
        box.style.height = `${box_size}px`
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

function changeSize() {

}

createGrid(16)
hover()