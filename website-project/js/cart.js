let cartTotal = 0;

document.addEventListener('DOMContentLoaded', retrieveCart);

console.log(retrieveCart())

function getItemById(id) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == id) {
        return items[i];
      };
    };
  };

  function saveCart(shoppingCart) {
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
  };
  
  function retrieveCart() {
    cart = JSON.parse(localStorage.getItem('cart'))
  }
  
  function getCartTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += (cart[i].price * cart[i].quantity);
    };
    cartTotal = total;
  };
  
  function addItemToCart(id) {
    const item = getItemById(id);
    if (item.quantity == 0) {
      cart.push(item);
      item.quantity++;
      console.log('Item ' + id + ' added');
      } else {
        item.quantity++;
        console.log('Item ' + id + ' added');
      }
  };
  
  function removeItemFromCart(id) {
    const item = getItemById(id);
    const index = cart.indexOf(item);
    console.log(index);
    cart.splice(index, 1);
    item.quantity = 0;
  };
  
  function increaseQuantity(id) {
    const item = getItemById(id);
    item.quantity++;
  };
  
  function decreaseQuantity(id) {
    const item = getItemById(id); 
    item.quantity--;
    if (item.quantity == 0) {
      removeItemFromCart(id);
    };
  };
  
  function goToMarket() {
    window.location.href = 'market.html';
  };
  
  function goToHome() {
    window.location.href = 'index.html';
  };
  
  function goToLogin() {
    window.location.href = 'login.html'
  };
  
  function goToCart() {
    window.location.href = 'cart.html';
  };