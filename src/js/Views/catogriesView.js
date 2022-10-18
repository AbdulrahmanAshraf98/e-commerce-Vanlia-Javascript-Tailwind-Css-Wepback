import View from "./view";

class CategoriesView extends View {
	constructor() {
		super(document.querySelector(".filter-categories"));
	}
	_generateMarkup() {
		return ` <div class=" sm:w-3/12 md:w-2/12 mb-2 text-center"><button class="filter-btn btn   px-4 py-2  hover:text-white  border-none rounded-md text-sm hover:bg-btn duration-200" data-id="00" data-name="ALl">All</button> </div>  ${this._data
			.map(this._generateMarkupView)
			.join("")}`;
	}
	_generateMarkupView(categoryItem, index) {
		return ` 
        <div class=" sm:w-3/12 md:w-2/12 mb-2 text-center"><button class="filter-btn btn   px-4 py-2  hover:text-white border-none rounded-md text-sm hover:bg-btn duration-200" data-id="${index}" data-name="${categoryItem}">${categoryItem}</button> </div> `;
	}
	addFilterByHandler(handler) {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".filter-btn");
			if (!btn) return;
			handler(btn.dataset.name);
		});
	}
	addRenderHandler(handler) {
		window.addEventListener("load", handler);
	}	
}

export default new CategoriesView();
