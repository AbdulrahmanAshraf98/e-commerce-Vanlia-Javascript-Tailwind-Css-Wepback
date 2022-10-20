import {
	addToCart,
	deleteFromCart,
	getALlCategories,
	getProductsByCategory,
	loadProductDetails,
	loadProducts,
	removeFromCart,
	state,
} from "./model";
import "../css/style.css";
import productsView from "./Views/productsView";
import categoriesView from "./Views/catogriesView";
import cartView from "./Views/cartView";
import modalView from "./Views/modalView";
import productView from "./Views/productView";

const productsController = async () => {
	try {
		const categoryName = window.location.hash.slice(1).replace("%20", " ");
		productsView.renderSpinner();
		if (!categoryName || categoryName === "All") await loadProducts();
		else await getProductsByCategory(categoryName);
		productsView.render(state.productsData);
		categoriesView.render(state.Categories);
	} catch (error) {
		productsView.renderErrorMessage(error);
	}
};
const categoriesController = async () => {
	try {
		await getALlCategories();
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
const addToCartController = (id) => {
	const productItem = getProduct(id);
	addToCart(productItem);
	cartView.render(state.cartItems);
	cartView.openCart();
};
const removeFromCartController = (id) => {
	removeFromCart(id);
	cartView.render(state.cartItems);
};
const deleteProductFromCart = (id) => {
	deleteFromCart(id);
	cartView.render(state.cartItems);
};
const closeModal = () => {
	modalView.closeModal();
};
const init = () => {
	productsView.addRenderHandler(productsController);
	categoriesView.addRenderHandler(categoriesController);
	productsView.addToCartHandler(addToCartController);
	productsView.viewProductHandler(viewProductController);
	productView.addToCartHandler(addToCartController);
	productView.closeModalHandler(closeModal);
	cartView.addToCartHandler(addToCartController);
	cartView.removeFromCartHandler(removeFromCartController);
	cartView.deleteFromCartHandler(deleteProductFromCart);
};

init();
