export default class View {
	constructor(parentElement) {
		this._parentElement = parentElement;
		this._data = null;
	}
	render(data) {
		this._data = data;
		const markup = this._generateMarkup();
		this._clear();
		this._parentElement.insertAdjacentHTML("afterbegin", markup);
	}
	_clear() {
		this._parentElement.innerHTML = "";
	}
}
