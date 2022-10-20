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
        <div class="w-full sm:w-6/12 md:w-4/12 lg:3/12 px-2 animate-fade ">
        <div class="product-card   ">
        <div class="product-image ">
            <img class="w-full h-full object-cover object-top" src=${
							productItem.image
						} >
        </div>
        <div class="product-details ">
			<h4 class="product-title ">${productItem.title.slice(0, 10)}</h4>
			
            <span class="product-category">${productItem.category}</span>
			<p class="product-desc">${productItem.description.slice(0, 100)}</p>
           <div class="flex  items-center justify-between mt-3">  
		    <p class="product-price">$${productItem.price}</p>
            <button class="view-product-btn btn text-white"data-id="${
							productItem.id
						}">View</button>
						<button class="addToCart-btn btn primary"data-id="${
							productItem.id
						}">Add To Cart</button>
			</div>
       	 </div>
    </div>
    </div>`;
	}
	addRenderHandler(handler) {
		window.addEventListener("load", handler);
		window.addEventListener("hashchange", handler);
	}
	addToCartHandler(handler) {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".addToCart-btn");
			if (!btn) return;
			handler(btn.dataset.id);
		});
	}
	viewProductHandler(handler) {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".view-product-btn");
			if (!btn) return;
			handler(btn.dataset.id);
		});
	}
}

export default new ProductsView();
