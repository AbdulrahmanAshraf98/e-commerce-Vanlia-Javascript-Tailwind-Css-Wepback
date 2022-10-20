import View from "./view";

class Modal extends View {
	constructor() {
		super(document.querySelector(".modal"));
	}
	openModal() {
		this._parentElement.classList.add("show");
	}
	closeModal() {
		this._parentElement.classList.remove("show");
	}
}

export default new Modal();
