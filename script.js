//your JS code here. If required.


    const container = document.querySelector(".container");

    for (let i = 0; i < 800; i++) {
        const box = document.createElement("div");
        box.classList.add("square");
        container.appendChild(box);
    }
// Get all square elements
const squares = document.querySelectorAll('.square');

// Add hover effect to each square
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        // Change the background color on hover
        square.style.backgroundColor = '#3498db'; // Change to your desired color

        // Set a timeout to revert the color after 1 second
        setTimeout(() => {
            square.style.backgroundColor = '#fff'; // Revert to original color
        }, 1000); // 1000 milliseconds = 1 second
    });
});

