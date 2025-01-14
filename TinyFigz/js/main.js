// This file contains JavaScript functionality for the TinyFigz website

// Shopping cart functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
}

function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        let cartItems = cart.map(item => `${item.name}: $${item.price}`).join('\n');
        alert(`Your cart:\n${cartItems}`);
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic filter display on shop page
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.dataset.category;
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            if (category === 'all' || product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});