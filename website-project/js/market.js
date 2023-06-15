cart = [];

let cartTotal = 0;

const items = [
  {
    id: 1,
    title: 'Strawberry',
    img: './photos/strawberry.jpg',
    price: '$1.50',
    quantity: 0
  },
  {
    id: 2,
    title: 'Orange',
    img: './photos/orange.jpg',
    price: '$3.00',
    quantity: 0
  },
  {
    id: 3,
    title: 'Apple',
    img: './photos/apple.jpg',
    price: '$2.00',
    quantity: 0
  },
  {
    id: 4,
    title: 'Watermelon',
    img: './photos/watermelon.jpeg',
    price: '$5.00',
    quantity: 0
  },
  {
    id: 5,
    title: 'Banana',
    img: './photos/banana.jpg',
    price: '$2.50',
    quantity: 0
  },
  {
    id: 6,
    title: 'Peach',
    img: './photos/peach.jpg',
    price: '$3.00',
    quantity: 0
  },
  {
    id: 7,
    title: 'Pear',
    img: './photos/pear.jpg',
    price: '$3.50',
    quantity: 0
  },
  {
    id: 8,
    title: 'Plum',
    img: './photos/plum.jpg',
    price: '$4.00',
    quantity: 0
  }
];

document.addEventListener('DOMContentLoaded', generateMarket);

document.addEventListener("beforeunload", saveCart)

function generateMarket() {
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let store = document.querySelector('.store');
    let content = document.querySelector('template').content;
    let card = content.cloneNode(true);
    card.querySelector('.product-img').src = item.img;
    card.querySelector('.product-img').alt = item.title;
    card.querySelector('.product-title').innerText = item.title;
    card.querySelector('.product-price').innerText = item.price;
    card.querySelector('.add-to-cart').value = item.id;
    card.querySelector('.buy').value = item.id;
    store.append(card);
  }
};

function getItemById(id) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id == id) {
      return items[i];
    };
  };
};

function getCartTotal() {
  let total = 0;
  sCart = retrieveCart();
  for (let i = 0; i < sCart.length; i++) {
    total += (sCart[i].price * sCart[i].quantity);
  };
  cartTotal = total;
};

function saveCart(shoppingCart) {
  localStorage.setItem('cart', JSON.stringify(shoppingCart));
};

function retrieveCart() {
  cart = JSON.parse(localStorage.getItem('cart'))
}

function addItemToCart(id) {
  const item = getItemById(id);
  if (item.quantity == 0) {
    cart.push(item);
    item.quantity++;
    console.log('Item ' + id + ' added');
    saveCart(cart)
    console.log(JSON.parse(localStorage.getItem('cart')));
    } else {
      item.quantity++;
      console.log('Item ' + id + ' added');
      saveCart(cart)
      console.log(JSON.parse(localStorage.getItem('cart')));
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