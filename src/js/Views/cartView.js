import View from "./view";

class Cart extends View {
	constructor() {
		super(document.querySelector(".cart"));
		this.closeCart();
	}
	_generateMarkup() {
		return this._generateMarkupView(this._data);
	}
	_generateMarkupView(cart) {
		return `
        <aside class="cart__content bg-white w-80 h-full absolute right-0 top-0 px-8 py-4 flex flex-col overflow-y-auto">
        <div class="cart__heading my-4 flex gap-4 items-center">
            <div class="cart__title text-2xl text-gray-700 font-bold ">Cart</div>
            <div class="cart__total text-lg text-gray-500 ">${cart.reduce(
							(accumulator, current) => {
								return accumulator + current.quantity;
							},
							0,
						)}</div>
            <div class="cart__close flex-1 mr-auto text-right ">
                <button class="btn close-btn text-black text-2xl" >x</button>
            </div>
        </div>
        <div class="cart__items ">
           ${cart.map(this._generateCartItemsMarkup).join("")}
        </div>
        <div class="cart__footer mt-auto">
            <h3 class="text-2xl flex justify-between">Total <span>${cart.reduce(
							(accumulator, current) => {
								return accumulator + current.price * current.quantity;
							},
							0,
						)}</span></h3>
        </div>
    </aside>
        `;
	}
	_generateCartItemsMarkup(cartItem) {
		return ` <div class="cart__item flex flex-wrap items-center gap-4 mb-6">
        <div class="product__image w-16">
            <img src=${cartItem.image} class="w-full h-auto object-cover ">
        </div>
        <div class="product__info flex-1 text-center">
            <div class="product__title">${cartItem.title.slice(0, 10)}</div>
            <div class="product__price">${cartItem.price}</div>
            <button class="delete-btn" data-id="${cartItem.id}">Remove</button>
        </div>
        <div class="cart__controller  mr-auto text-right">
            <button class="add-btn" data-id="${cartItem.id}">+</button>
            <div>${cartItem.quantity}</div>
            <button class="remove-btn" data-id="${cartItem.id}">-</button>
        </div>
    </div>`;
	}
	addToCartHandler(handler) {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".add-btn");
			if (!btn) return;
			handler(btn.dataset.id);
		});
	}
	removeFromCartHandler(handler) {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".remove-btn");
			if (!btn) return;
			handler(btn.dataset.id);
		});
	}
	deleteFromCartHandler(handler) {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".delete-btn");
			if (!btn) return;
			handler(btn.dataset.id);
		});
	}
	openCart() {
		if (this._parentElement.classList.contains("hidden"))
			this._parentElement.classList.remove("hidden");
	}
	closeCart() {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".close-btn");
			if (!btn) return;
			this._parentElement.classList.add("hidden");
		});
	}
}
export default new Cart();
