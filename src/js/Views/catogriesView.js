import View from "./view";

class CategoriesView extends View {
	constructor() {
		super(document.querySelector(".filter-categories"));
	}
	_generateMarkup() {
		const id = window.location.hash.slice(1);
		return ` <div class="w-full mb-3"><button class="filter-btn btn w-full sm:w-max   ${+id ===0||!id? "bg-black" : "primary"} hover:bg-black n duration-200" data-id="0" data-name="All">All</button> </div>  ${this._data
			.map((categoryItem,index)=> this._generateMarkupView(categoryItem,index,id))
			.join("")}`;
	}
	_generateMarkupView(categoryItem, index,id) {
		return ` 
        <div class="w-full sm:w-3/12 mb-3"><button class="filter-btn btn ${
					+id === index + 1 ? "bg-black" : "primary"
				} w-full sm:w-max   hover:bg-black duration-200" data-id="${
			index + 1
		}" data-name="${categoryItem}">${categoryItem}</button> </div> `;
	}
	addFilterByHandler(handler) {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".filter-btn");
			if (!btn) return;
			handler(btn.dataset.name);
			window.location.hash = btn.dataset.id;
		});
	}
	addRenderHandler(handler) {
		window.addEventListener("load", handler);
	}	
}

export default new CategoriesView();
