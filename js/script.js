const buttonAdd = document.querySelectorAll('.btn--add');
const mainDropdown = document.querySelector('#main');
const cart = document.querySelector('#cart');
const cartAmount = document.querySelector('#cartAmount');
const cartList = document.querySelector('.cart-product__list');
let cartListCount = 0;

for (let i = 0; i < buttonAdd.length; i++) {
    buttonAdd[i].addEventListener('click', e => {
        mainDropdown.style.display = 'none';
        cart.style.display = 'flex';
        cartAmount.style.visibility = 'visible';
        cartListCount++;
        cartAmount.innerHTML = cartListCount;

        let self = e.currentTarget;
        let parent = self.closest('.product__item');
        let img = parent.querySelector('.product__img ').getAttribute('src');
        let title = parent.querySelector('.product__title').textContent;
        let price = parent.querySelector('.product__price').textContent;
        cartList.insertAdjacentHTML('afterbegin', generateCartProduct(img, title, price));
    })
}

const generateCartProduct = (img, title, price) => {
    return `

        <div class="cart-product__item">
            <img src="${img}" alt="" class="cart-product__img">
            <div class="cart-product__info">
                <h4 class="cart-product__title">${title}</h4>
                <p class="cart-product__size">Size 11</p>
            </div>
            <p class="cart-product__price">${price}</p>
        </div>

    `
}