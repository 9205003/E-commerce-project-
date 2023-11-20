// Function to add items to the cart
function addToCart(productName, price) {
  // Add the item to the cart
  // You can implement this function as needed
  // For simplicity, let's assume there's a global cart array
  // and a global variable for the total
  cart.push({ name: productName, price: price });
  cartTotal += price;

  // Update the cart display
  updateCartDisplay();
}

// Function to update the cart display in the HTML
function updateCartDisplay() {
  var cartItemsElement = document.getElementById('cart-items');
  var cartTotalElement = document.getElementById('cart-total');

  // Clear previous cart items
  cartItemsElement.innerHTML = '';

  // Display each item in the cart
  cart.forEach(function (item) {
    var listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsElement.appendChild(listItem);
  });

  // Display the total
  cartTotalElement.textContent = cartTotal;
}

// Function to get cart data from the server
function getCartData() {
  // Use fetch to make a GET request to the server endpoint
  fetch('http://localhost:3000/cart')
    .then(response => response.json())
    .then(data => {
      // Update the global cart and total with the server data
      cart = data.items;
      cartTotal = data.total;

      // Update the cart display in the HTML
      updateCartDisplay();
    })
    .catch(error => console.error('Error fetching cart data:', error));
}

// Initialize the cart and total variables
var cart = [];
var cartTotal = 0;

// Call getCartData() on page load to populate the initial cart data
document.addEventListener('DOMContentLoaded', function () {
  getCartData();
});
