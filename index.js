let width = 100;
let height = 100;

// Generates a row
function createRow() {
	let row = document.createElement("div");
	row.className = "row";
	return row;
}

// Generates a pixel
function createPixel(w, h) {
	let pixel = document.createElement("div");
	pixel.className = "pixel blank";
	pixel.w = w;
	pixel.h = h;

	pixel.addEventListener('mouseover', onMouseOver);
	return pixel;
}

// Generates a grid
function createGrid() {
	let grid = document.createElement("grid");
	grid.className = "grid";
	grid.id = "grid";

	for (let h = 0; h < height; h++) {
		const row = createRow();
		for (let w = 0; w < width; w++)
			row.appendChild(createPixel(w, h));
		grid.appendChild(row);
	}
	return grid;
}

// Regenerates grid
function regenerateGrid() {
	// Remove old grid
	const oldGrid = document.getElementById("grid");
	if (oldGrid != null)
		document.body.removeChild(oldGrid);

	// Create new grid
	const grid = createGrid();
	document.body.appendChild(grid);
}

// Change grid to one of different size
function changeGridSize(newWidth = width, newHeight = height) {
	// Update new values and regenerate grid
	width = newWidth;
	height = newHeight;
	regenerateGrid();
}

// Changes style when pixel is moused over
function onMouseOver(event) {
	let pixel = event.currentTarget;
	pixel.className = "pixel marked";
}

window.onload = () => {
	regenerateGrid();
}

