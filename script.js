function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let wa = document.getElementById("wa").value;

  if (username === "" || password === "" || wa === "") {
    document.getElementById("error").innerText =
      "Semua data harus diisi!";
    return;
  }

  // Simpan status login
  localStorage.setItem("isLogin", "true");
  localStorage.setItem("username", username);
  localStorage.setItem("wa", wa);

  // Masuk ke halaman utama
  window.location.href = "home.html";
}

// ================= PROTEKSI HALAMAN =================
function checkLogin() {
  if (localStorage.getItem("isLogin") !== "true") {
    window.location.href = "index.html";
  }
}

// ================= LOGOUT =================
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

// ================= KERANJANG =================
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

  document.getElementById("total").innerText =
    "Total: Rp " + total;
}

// ================= TRANSAKSI =================
function finishOrder() {
  localStorage.removeItem("cart");
  window.location.href = "thanks.html";
  return false;
}

// Auto load cart
if (document.getElementById("cartItems")) {
  loadCart();
}
