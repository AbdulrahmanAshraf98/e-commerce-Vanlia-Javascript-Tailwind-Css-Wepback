import View from "./view";

class ProductsView extends View {
	constructor() {
		super(document.querySelector(".products-container"));
	}
	_generateMarkup() {
		return this._data.map(this._generateMarkupView).join("");
	}
	_generateMarkupView(productItem) {
		return `
        <div class="w-full sm:w-6/12 md:w-4/12 lg:3/12 px-2">
        <div class="product-item shadow-md  shadow-black my-4  ">
        <div class="product-image overflow-hidden rounded-t-md h-80">
            <img class="w-full h-full object-cover object-top" src=${
							productItem.image
						} >
        </div>
        <div class="product-info py-4 px-4 text-center">
            <span class="product-category-name  text-md text-gray-500">${
							productItem.category
						}</span>
            <h4 class="product-title text-3xl text-gray-700">${productItem.title.slice(
							0,
							20,
						)}</h4>
            <p class="product-price text-xl  my-2">$${productItem.price}</p>
            <div class="py-2">${productItem.rating.rate}</div>
            <button class="addToCart-btn btn px-4 py-2 bg-btn text-white border-none rounded-md"data-id="${
							productItem.id
						}">Add To Cart</button>     
        </div>
    </div>
    </div>`;
	}
	addRenderHandler(handler) {
		window.addEventListener("load", handler);
	}
	addToCartHandler(handler) {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".addToCart-btn");
			if (!btn) return;
			handler(btn.dataset.id);
		});
	}
}

export default new ProductsView();
