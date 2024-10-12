// Simplified interaction for future integration
document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('This unique piece is all yours!');
        });
    });
});
