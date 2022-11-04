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
function createGrid(width, height) {
	let grid = document.createElement("grid");
	grid.className = "grid";

	for (let h = 0; h < height; h++) {
		const row = createRow();
		for (let w = 0; w < width; w++)
			row.appendChild(createPixel(w, h));
		grid.appendChild(row);
	}
	return grid;
}

// Changes style when pixel is moused over
function onMouseOver(event) {
	let pixel = event.currentTarget;
	pixel.className = "pixel marked";
}

window.onload = () => {
	const grid = createGrid(width, height);
	document.body.appendChild(grid);
}