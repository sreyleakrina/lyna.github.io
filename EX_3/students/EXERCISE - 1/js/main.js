// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector('.card');

    // Add an event listener to change the background color when the card is clicked
    card.addEventListener('click', function () {
        card.style.backgroundColor = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
