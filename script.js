// Simple search functionality (client-side)
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const carListings = document.querySelectorAll(".car-listing");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();

    carListings.forEach((listing) => {
        const carName = listing.querySelector("h3").textContent.toLowerCase(); 
        if (carName.includes(searchTerm)) {
            listing.style.display = "block";
        } else {
            listing.style.display = "none";
        }
    });
});
// ... your existing JavaScript code ...

// Add to Cart Functionality (Using Local Storage)
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItemsContainer = document.getElementById("cart-items");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const carId = button.dataset.carId;
        const carName = button.parentElement.querySelector("h3").textContent;
        const carPrice = button.parentElement.querySelector(".car-details").textContent;
        const carImage = button.parentElement.querySelector("img").src; // Get the image source

        // Get existing cart from local storage or create an empty array
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Add the car to the cart array (if not already in the cart)
        if (!cart.some(item => item.carId === carId)) {
            cart.push({ carId: carId, name: carName, price: carPrice, image: carImage }); // Include image
        }

        // Store the updated cart in local storage
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`"${carName}" added to cart! Price: ${carPrice}`);
        displayCart(); // Update the cart display
    });
});

// Function to display the cart
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = ''; // Clear the cart section
        if (cart.length > 0) {
            cart.forEach(item => {
                const cartItem = document.createElement("div");
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;"> 
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <button class="remove-from-cart" data-car-id="${item.carId}">Remove</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        } else {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        }
    }
}

// Call displayCart on page load to show any existing cart items
displayCart();

// ... your existing JavaScript code ...

// ... your existing JavaScript code ... 

// Get all "Buy Now" buttons
const buyNowButtons = document.querySelectorAll(".buy-now"); 

// Add event listeners to each button
buyNowButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Get the car details
        const carName = button.parentElement.querySelector("h3").textContent;
        const carPrice = button.parentElement.querySelector(".car-details").textContent;

        // Display an alert message
        alert(`"${carName}" purchased! Price: ${carPrice}`); 
    });
});
