import View from "./view";
class NavbarView extends View {
	constructor() {
		super(document.querySelector(".nav-content"));
		this._toggleModeHandler();
	}
	_generateMarkup() {
		return this._generateMarkupView(this._data);
	}
	_generateMarkupView(cartItems) {
		console.log();
		return `    <div class="logo text-2xl dark:text-white">
        Store
    </div>
    <div class="nav__btns w-1/4 text-end flex-1 dark:text-white">
		<button class="toggle-mode">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon hidden" ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>	
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" style=""><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>

		</button>
        <button class="openCart-btn w-10 relative"><span class="absolute right-0 text-xs w-6 h-6 flex justify-center items-center text-white border-red-500 rounded-full bg-red-500 right-4 bottom-2/4">${this._data}</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></button>
    </div>`;
	}
	addRenderHandler(handler) {
		window.addEventListener("load", handler);
		window.addEventListener("hashchange", handler);
	}
	openCartHandler(handler) {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".openCart-btn");
			if (!btn) return;
			handler();
		});
	}
	_toggleModeHandler() {
		this._parentElement.addEventListener("click", (event) => {
			const btn = event.target.closest(".toggle-mode");
			console.log();
			if (!btn) return;
			this._toggleMode();
		});
	}
	_toggleMode() {
		document.documentElement.classList.toggle("dark");
		const moonIcon = this._parentElement.querySelector(".feather-moon");
		const sunIcon = this._parentElement.querySelector(".feather-sun");
		if (sunIcon.classList.contains("hidden")) {
			moonIcon.classList.add("hidden");
			sunIcon.classList.remove("hidden");
		} else {
			sunIcon.classList.add("hidden");
			moonIcon.classList.remove("hidden");
		}
	}
}

export default new NavbarView();
