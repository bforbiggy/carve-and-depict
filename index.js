const width = 50;
const height = 50;

window.onload = () => {
	const grid = document.getElementById("grid");

	for (let w = 0; w < width; w++) {
		let row = document.createElement("div");
		row.className = "row";

		for (let h = 0; h < height; h++) {
			let pixel = document.createElement("div");
			pixel.className = "pixel blank";
			row.appendChild(pixel);
		}

		grid.appendChild(row);
	}
}