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
			
            <span class="product-category">${productItem.category.name}</span>
			<p class="product-desc">${productItem.description.slice(0, 100)}</p>
           <div class="flex  items-center justify-between mt-3">  
		    <p class="product-price">$${productItem.price}</p>
            <button class="view-product-btn btn text-white"data-id="${
							productItem.id
						}"><svg class="w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
						<button class="addToCart-btn btn primary"data-id="${
							productItem.id
						}"> <svg class="w-4"
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
					  >
						<path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
					  </svg> </button>
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
