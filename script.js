// script.js
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-mode");
  const addToCartButton = document.getElementById("add-to-cart");
  
  // Toggle mode functionality
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // You can remove the inline background color logic, as it's handled in CSS
  });

  // Add to cart alert functionality
  addToCartButton.addEventListener("click", function () {
    alert("Item added to cart!");
  });
});
