import View from "./view";

class CategoriesView extends View {
	constructor() {
		super(document.querySelector(".filter-categories"));
	}
	_generateMarkup() {
		const activeButtonName = window.location.hash.slice(1).replace("%20", " ");
		return ` <div class="w-full mb-3"><a href="#All" class="btn inline-block w-full sm:w-max   ${
			activeButtonName === "All" || !activeButtonName ? "bg-black" : "primary"
		} hover:bg-black duration-500" data-id="0" data-name="All">All</a> </div>  ${this._data
			.map((categoryItem, index) =>
				this._generateMarkupView(categoryItem, index, activeButtonName),
			)
			.join("")}`;
	}
	_generateMarkupView(categoryItem, index, activeButtonName) {
		return ` 
        <div class="w-full sm:w-3/12 mb-3"><a href="#${categoryItem}" class="btn inline-block ${
			activeButtonName === categoryItem ? "bg-black" : "primary"
		} w-full sm:w-max   hover:bg-black duration-500" data-id="${
			index + 1
		}" data-name="${categoryItem}">${categoryItem}</a> </div> `;
	}

	addRenderHandler(handler) {
		window.addEventListener("load", handler);
	}
}

export default new CategoriesView();
