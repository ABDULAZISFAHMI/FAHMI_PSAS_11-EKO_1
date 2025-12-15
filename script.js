let cart = JSON.parse(localStorage.getItem("cart")) || [];

function login(){
  localStorage.setItem("login","true");
  window.location.href="home.html";
}

function logout(){
  localStorage.clear();
  window.location.href="index.html";
}

function addToCart(name,price){
  cart.push({name,price});
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Barang ditambahkan");
}

function loadCart(){
  let items=document.getElementById("cartItems");
  let total=0;
  items.innerHTML="";
  cart.forEach(i=>{
    items.innerHTML+=`<p>${i.name} - Rp ${i.price}</p>`;
    total+=i.price;
  });
  document.getElementById("total").innerText="Total: Rp "+total;
}

function finishOrder(){
  localStorage.removeItem("cart");
  window.location.href="thanks.html";
  return false;
}

if(document.getElementById("cartItems")) loadCart();
