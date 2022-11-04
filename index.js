const width = 50;
const height = 50;

function onMouseOver(event) {
	let pixel = event.currentTarget;
	pixel.className = "pixel marked";
}

window.onload = () => {
	const grid = document.getElementById("grid");

	for (let h = 0; h < height; h++) {
		let row = document.createElement("div");
		row.className = "row";

		for (let w = 0; w < width; w++) {
			let pixel = document.createElement("div");
			pixel.className = "pixel blank";
			pixel.w = w;
			pixel.h = h;

			pixel.addEventListener('mouseover', onMouseOver);
			row.appendChild(pixel);
		}

		grid.appendChild(row);
	}
}