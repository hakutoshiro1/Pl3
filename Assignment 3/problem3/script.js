const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


let books = [];

let addToCart = (ix)=>{
    books.push(ix);
    console.log(books);
    updateCartCount();
}

let showCart = ()=>{
    alert('Books in cart : '+ books.toString());
    while(books.length)books.pop();
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById("cunt");
    cartCount.textContent = books.length;
}

