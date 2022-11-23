let width;
let height;
let pixelSize = 15;

// Disabling carve and depict using P
let disabled = false;
window.addEventListener('keydown', (key) => {
	if (key.keyCode == 80) {
		disabled = !disabled;
	}
})

// Generates a row
function createRow() {
	let row = document.createElement("div");
	row.className = "row";
	return row;
}

// Generates a pixel
function createPixel(w, h) {
	// Pixel data (class and position)
	let pixel = document.createElement("div");
	pixel.classList.add("pixel");
	pixel.classList.add("blank");
	pixel.w = w;
	pixel.h = h;

	// Set pixel size
	if (pixelSize > 0) {
		pixel.style.minWidth = `${pixelSize}px`;
		pixel.style.minHeight = `${pixelSize}px`;
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
	pixel.classList.add("marked");
}

window.onload = () => {
	width = (window.innerWidth / pixelSize);
	height = (window.innerHeight / pixelSize);
	regenerateGrid();
}

console.log(
	`
[Variables]
width = Grid width in blocks
height = Grid height in blocks
disabled = Disables mouse drawing

[Functions]
changeGridSize(newWidth, newHeight) = Sets grid dimensions in blocks
changePixelSize(size) = Changes block dimensions in pixels
regenerateGrid() = Resets grid
`
)