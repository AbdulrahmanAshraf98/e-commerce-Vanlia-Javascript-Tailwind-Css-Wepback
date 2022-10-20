import View from "./view";

class ProductView extends View {
	constructor() {
		super(document.querySelector(".modal .overlay"));
	}
	_generateMarkup() {
		return this._generateMarkupView(this._data);
	}
	_generateMarkupView(productItem) {
		return `
        <section class="product py-4 sm:py-0">
            <div class="container m-auto px-4  sm:py-8 h-screen relative">
                <button class="btn absolute top:0 left-5 sm:top-10 sm:left-10 close-model-btn mb-4 text-4xl text-gray-800">x</button>
                <div class="flex flex-wrap gap-16 items-center h-full  bg-white  p-8  overflow-y-auto overflow-x-hidden ">
                    
                    <div class="w-full sm:w-3/12">
                        <div class="product-image  ">
                            <img class="w-full h-full  object-contain" src="${productItem.images[0]}"/>
                        </div>
                    </div>
                    <div class="w-full sm:w-7/12">
                        <div class="product-info break-words">
                            <div class="product-details ">
                                <h4 class="product-title text-gray-900">${productItem.title}</h4>   
                                <span class="product-category inline-block mt-4">${productItem.category.name}</span>
                                <p class="product-desc">${productItem.description}</p>
                               <div class="flex  items-center justify-between mt-3">  
                                <p class="product-price">$${productItem.price}</p>
                                
                               <button class="addToCart-btn btn primary"data-id="${productItem.id}">Add To Cart</button></div>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>`;
	}
	addToCartHandler(handler) {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".addToCart-btn");
			if (!btn) return;
			handler(btn.dataset.id);
		});
	}
	closeModalHandler(handler) {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".close-model-btn");
			if (!btn) return;
			handler();
		});
	}
}
export default new ProductView();
