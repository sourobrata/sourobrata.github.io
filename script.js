let cartCount = 0;

const addToCartBtn = document.getElementById("addToCartBtn");
const quantitySelect = document.getElementById("quantity");
const cartMessage = document.getElementById("cartMessage");

addToCartBtn.addEventListener("click", () => {
  const quantity = parseInt(quantitySelect.value, 10);

  cartCount += quantity;

  cartMessage.textContent = `Added ${quantity} item(s) to cart. Total items: ${cartCount}`;
});
