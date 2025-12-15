function login() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    document.getElementById("error").innerText =
      "Username dan password harus diisi!";
    return;
  }

  // Simpan status login
  localStorage.setItem("isLogin", "true");
  localStorage.setItem("username", username);

  window.location.href = "home.html";
}

// ===== CEK LOGIN =====
function checkLogin() {
  if (localStorage.getItem("isLogin") !== "true") {
    window.location.href = "index.html";
  }
}

// ===== LOGOUT =====
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

