import View from "./view";

class ProductView extends View {
	constructor() {
		super(document.querySelector(".modal .overlay"));
		this.currentImageIndex = 0;
		this._changeImage();
		this._time = 3000;
	}
	_generateMarkup() {
		this.clearInterval = this._changeImageAuto();

		return this._generateMarkupView(this._data);
	}
	_generateMarkupView(productItem) {
		return `
        <section class="product py-4 sm:py-0">
            <div class="container m-auto px-4  sm:py-8 h-screen relative">
                <button class="btn absolute top:0 left-5 sm:top-10 sm:left-10 close-model-btn mb-4 text-4xl text-gray-800">x</button>
                <div class="flex flex-wrap gap-16 items-center h-full  bg-white  p-8  overflow-y-auto overflow-x-hidden ">
                    
                    <div class="w-full lg:w-6/12 overflow-x-hidden">
                        <div class="product-images  ">
                            <img class="currentImage w-full h-full  object-contain animate-fade" src="${
															productItem.images[this.currentImageIndex]
														}"/>
                        </div>
                        
                        <div class="images flex gap-8 mt-4 overflow-x-auto">
                        ${this._generateImagesMarkupView(productItem.images)}
                        </div>                
                    </div>
                    <div class="w-full  lg:w-5/12 ">
                        <div class="product-info break-words">
                            <div class="product-details ">
                                <h4 class="product-title text-gray-900">${
																	productItem.title
																}</h4>   
                                <span class="product-category text-gray-700 inline-block mt-4">${
																	productItem.category.name
																}</span>
                                <p class="product-desc">${
																	productItem.description
																}</p>
                               <div class="flex  items-center justify-between mt-3">  
                                <p class="product-price">$${
																	productItem.price
																}</p>
                                
                               <button class="addToCart-btn btn primary"data-id="${
																	productItem.id
																}">Add To Cart</button></div>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>`;
	}
	_generateImagesMarkupView(images) {
		return `${images
			.map(
				(image, index) =>
					`<img class="image cursor-pointer w-32 h-auto  object-contain ${
						index === 0 ? "" : "blur-sm"
					} hover:blur-0 duration-300 " src=${image} data-id=${index} />`,
			)
			.join("")}`;
	}
	_changeImageAuto() {
		return setInterval(() => {
			if (this._data?.images.length) {
				const { images } = this._data;
				if (this.currentImageIndex < images.length - 1)
					this.currentImageIndex++;
				else if (this.currentImageIndex === images.length - 1)
					this.currentImageIndex = 0;
				const currentImage = this._parentElement.querySelector(".currentImage");
				// currentImage.classList.remove("animate-fade");
				// currentImage.classList.add("animate-fade");
				currentImage.src = images[this.currentImageIndex];
				this._activeImageStyle();
			}
		}, this._time);
	}
	_changeImage() {
		this._parentElement.addEventListener("click", (event) => {
			const image = event.target.closest(".image");
			if (!image) return;
			this.currentImageIndex = +image.dataset.id;
			this._parentElement.querySelector(".currentImage").src =
				this._data.images[this.currentImageIndex];
			this._activeImageStyle();
			this._time = 3000;
		});
	}
	_activeImageStyle() {
		const allImages = this._parentElement.querySelectorAll(".image");
		const activeClass = "blur";
		allImages.forEach((image) => {
			image.classList.add("blur-sm");
			if (+image.dataset.id === this.currentImageIndex)
				image.classList.remove("blur-sm");
		});
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
			clearInterval(this.clearInterval);
		});
	}
}
export default new ProductView();