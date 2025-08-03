function createGrid(grid_size) {
    let box_num = grid_size * grid_size
    let box_size = 640 / grid_size
    const grid = document.querySelector(".grid")
    grid.innerHTML = '';
    for (let i = 0; i < box_num; i++) {
        let box = document.createElement("div")
        box.style.width = `${box_size}px`
        box.style.height = `${box_size}px`
        box.setAttribute("class", "box")
        grid.appendChild(box)
    }
    hover()
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
    const change_size = document.getElementById('size_selector');
    change_size.addEventListener('click', function() {
        let input = prompt('Enter a size between 2-100', 2)
        while (input > 100 || input < 2) {
            input = prompt('Enter a size between 2-100', 2)
        }
        createGrid(input);
    });
}


changeSize()
createGrid(16)