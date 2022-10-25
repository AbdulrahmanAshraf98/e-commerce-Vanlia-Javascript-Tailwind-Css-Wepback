import {
	addItemToCart,
	addToCart,
	deleteItemFromCart,
	loadALlCategories,
	loadProductDetails,
	loadProducts,
	loadProductsByCategory,
	removeItemFromCart,
	state,
} from "./model";
import "../css/style.css";
import productsView from "./Views/productsView";
import categoriesView from "./Views/catogriesView";
import cartView from "./Views/cartView";
import modalView from "./Views/modalView";
import productView from "./Views/productView";
import navbarView from "./Views/navbarView";

const productsController = async () => {
	try {
		const id = window.location.hash.slice(1);
		productsView.renderSpinner();
		if (!id || +id === 0) await loadProducts();
		else await loadProductsByCategory(id);
		productsView.render(state.productsData);
		categoriesView.render(state.Categories);
	} catch (error) {
		productsView.renderErrorMessage(error);
	}
};
const categoriesController = async () => {
	try {
		await loadALlCategories();
		categoriesView.render(state.Categories);
	} catch (error) {
		categoriesView.renderErrorMessage(error);
	}
};

const getProduct = (id) => {
	const productItemIndex = state.productsData.findIndex(
		(product) => product.id === +id,
	);
	const productItem = state.productsData[productItemIndex];
	return productItem;
};
const viewProductController = async (id) => {
	try {
		modalView.openModal();
		productView.renderSpinner();
		await loadProductDetails(id);
		productView.render(state.productDetails);
	} catch (error) {
		productView.renderErrorMessage(error);
	}
};
const addProductToCartController = (id) => {
	const productItem = getProduct(id);
	addItemToCart(productItem);
	cartView.render(state.cart);
	navbarView.render(state.cart.totalQuantity);
};

const removeProductFromCartController = (id) => {
	removeItemFromCart(id);
	cartView.render(state.cart);
	navbarView.render(state.cart.totalQuantity);
};
const deleteProductFromCart = (id) => {
	deleteItemFromCart(id);
	cartView.render(state.cart);
	navbarView.render(state.cart.totalQuantity);
};
const closeModal = () => {
	modalView.closeModal();
};
const openCartController = () => {
	cartView.render(state.cart);
	cartView.openCart();
};
const init = () => {
	navbarView.render(state.cart.totalQuantity);
	navbarView.openCartHandler(openCartController);
	categoriesView.addRenderHandler(categoriesController);
	productsView.addRenderHandler(productsController);
	productsView.addToCartHandler(addProductToCartController);
	productsView.viewProductHandler(viewProductController);
	productView.addToCartHandler(addProductToCartController);
	productView.closeModalHandler(closeModal);
	cartView.addToCartHandler(addProductToCartController);
	cartView.removeFromCartHandler(removeProductFromCartController);
	cartView.deleteFromCartHandler(deleteProductFromCart);
};

init();
