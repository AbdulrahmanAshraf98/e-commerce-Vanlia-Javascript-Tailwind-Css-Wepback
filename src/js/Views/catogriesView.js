import View from "./view";

class CategoriesView extends View {
	constructor() {
		super(document.querySelector(".filter-categories"));
	}
	_generateMarkup() {
		const id = +window.location.hash.slice(1);
		return ` <div class="w-full mb-3"><a href="#${0}" class="btn inline-block w-full sm:w-max   ${
			id === 0 || !id ? "bg-black" : "primary"
		} hover:bg-black duration-500" data-id="0" data-name="All">All</a> </div>  ${this._data
			.map((categoryItem, index) =>
				this._generateMarkupView(categoryItem, index, id),
			)
			.join("")}`;
	}
	_generateMarkupView(categoryItem, index, activeButtonId) {
		return ` 
        <div class="w-full sm:w-3/12 mb-3"><a href="#${
					categoryItem.id
				}" class="btn inline-block ${
			activeButtonId === categoryItem.id ? "bg-black" : "primary"
		} w-full sm:w-max   hover:bg-black duration-500" data-id="${
			index + 1
		}" data-name="${categoryItem.name}">${categoryItem.name}</a> </div> `;
	}

	addRenderHandler(handler) {
		window.addEventListener("load", handler);
	}
}

export default new CategoriesView();
