function createGrid(grid_size, hover_color) {
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
    if (hover_color === true) {
        hover_black()
    }
    else {
        hover_rainbow()
    }
}

function hover_black() {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach(box => {
        box.dataset.opacity = 0;
        box.addEventListener('mouseover', () => {
            let currentOpacity = parseFloat(box.dataset.opacity);
            if (currentOpacity < 1) {
                currentOpacity = Math.min(currentOpacity + 0.1, 1);
                box.dataset.opacity = currentOpacity;
                box.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
            }
        });
    });
}

function hover_rainbow() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.dataset.opacity = 0; // initial opacity
        box.addEventListener('mouseover', () => {
            let currentOpacity = parseFloat(box.dataset.opacity);

            // First hover: assign random color
            if (!box.dataset.color) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                const color = `${r}, ${g}, ${b}`;
                box.dataset.color = color;
            }

            // Increase opacity
            if (currentOpacity < 1) {
                currentOpacity = Math.min(currentOpacity + 0.1, 1);
                box.dataset.opacity = currentOpacity;
                box.style.backgroundColor = `rgba(${box.dataset.color}, ${currentOpacity})`;
            }
        });
    });
}


function changeSize() {
    const change_size = document.getElementById('size_selector');
    change_size.addEventListener('click', function() {
        let input = prompt('Enter a size between 2-100')
        while (input > 100 || input < 2) {
            input = prompt('Please enter a correct value. Enter a size between 2-100')
        }
        createGrid(input, true);
    });
}

function refresh() {
    const refresh_button = document.getElementById('refresh');
    refresh_button.addEventListener('click', function() {
        const grid = document.querySelector(".grid");
        let grid_size = Math.sqrt(grid.childElementCount);
        createGrid(grid_size, true)
    })
}

function colorSelectors() {
    const black = document.getElementById('black');
    const rainbow = document.getElementById('rainbow');
    black.addEventListener('click', function () {
        const grid = document.querySelector(".grid");
        let grid_size = Math.sqrt(grid.childElementCount);
        createGrid(grid_size, true)
    })
    rainbow.addEventListener('click', function () {
        const grid = document.querySelector(".grid");
        let grid_size = Math.sqrt(grid.childElementCount);
        createGrid(grid_size, false)
    })
}

createGrid(16, true)
changeSize()
refresh()
colorSelectors()