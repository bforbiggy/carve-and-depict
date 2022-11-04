let width = 100;
let height = 100;
let pixelSize = -1;
let disabled = false;

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

	// Custom styling if needed
	if (pixelSize > 0) {
		pixel.style.minWidth = `${pixelSize}vw`;
		pixel.style.minHeight = `${pixelSize}vw`;
	}

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
	width = newWidth;
	height = newHeight;
	regenerateGrid();
}

// Change pixel to one of different size
function changePixelSize(newSize) {
	pixelSize = newSize;
	regenerateGrid();
}

// Changes style when pixel is moused over
function onMouseOver(event) {
	if (disabled)
		return;
	let pixel = event.currentTarget;
	pixel.className = "pixel marked";
}

window.onload = () => {
	let ratio = window.screen.width / window.screen.height;
	width = Math.floor(100 * ratio);
	height = Math.floor(100 / ratio);
	regenerateGrid();
}

