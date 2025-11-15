// create 800 boxes
const container = document.querySelector(".container");

for (let i = 0; i < 800; i++) {
    const box = document.createElement("div");
    box.classList.add("square");

    // mouseover → color change
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "yellow";
    });

    // mouseout → back to original color
    box.addEventListener("mouseout", () => {
        box.style.backgroundColor = "rgb(29, 29, 29)";
    });

    container.appendChild(box);
}
