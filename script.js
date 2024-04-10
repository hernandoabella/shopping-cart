// script.js

const price = {
  // Prices go here
};

const categories = {
  // Categories go here
};

const cart = {
  items: [],
  total: 0,
};

function initialize() {
  setAttributes();
  setButtons();
}

function setAttributes() {
  const images = document.querySelectorAll("#choices img");
  images.forEach(img => img.addEventListener("click", () => addItemToCart(img)));
}

function setButtons() {
  document.getElementById("viewCartBtn").addEventListener("click", openCartModal);
  document.getElementById("clearCartBtn").addEventListener("click", clearCart);
  document.getElementById("checkoutBtn").addEventListener("click", checkout);
}

function addItemToCart(item) {
  const itemName = item.id;
  const category = getCategory(item);

  const existingItem = cart.items.find(i => i.name === itemName);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.items.push({
      name: itemName,
      category: category,
      price: price[itemName],
      quantity: 1,
    });
  }

  updateCartTotal();
}

function updateCartTotal() {
  cart.total = cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  document.getElementById("total").innerHTML = `Total: $${cart.total}`;
}

function openCartModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  displayCartItems();
}

function displayCartItems() {
  const cartItemsDiv = document.getElementById("cartItems");
  cartItemsDiv.innerHTML = "";

  cart.items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `<span>${item.name} x${item.quantity}</span> - $${(item.price * item.quantity).toFixed(2)}`;
    cartItemsDiv.appendChild(itemDiv);
  });
}

function clearCart() {
  cart.items = [];
  cart.total = 0;
  updateCartTotal();
  displayCartItems();
}

function checkout() {
  // Implement checkout logic here
  alert("Checkout functionality is not implemented yet!");
}

function getCategory(item) {
  for (const [category, categoryItems] of Object.entries(categories)) {
    if (categoryItems.includes(item.id)) {
      return category;
    }
  }
  return null;
}

// Modal functionality
function modal() {
  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close");

  function toggleModal() {
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  }

  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", event => {
    if (event.target === modal) toggleModal();
  });
}

// Initialize the script
initialize();
modal();
