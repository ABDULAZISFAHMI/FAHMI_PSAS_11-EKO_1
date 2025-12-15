let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produk ditambahkan ke keranjang");
}

function loadCart() {
  let items = document.getElementById("cartItems");
  let total = 0;
  items.innerHTML = "";

  cart.forEach(item => {
    items.innerHTML += `<p>${item.name} - Rp ${item.price}</p>`;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: Rp " + total;
}

function finishOrder() {
  localStorage.removeItem("cart");
  window.location.href = "thanks.html";
  return false;
}

function logout() {
  localStorage.clear();
  alert("Keranjang dikosongkan");
  window.location.href = "index.html";
}

if (document.getElementById("cartItems")) {
  loadCart();
}

