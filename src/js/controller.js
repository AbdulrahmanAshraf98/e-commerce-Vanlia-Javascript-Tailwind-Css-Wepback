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

const productsController = async () => {
	await loadProducts();
	productsView.render(state.productsData);
};
const categoriesController = async () => {
	await getALlCategories();
	categoriesView.render(state.Categories);
};

const getProduct = (id) => {
	const productItemIndex = state.productsData.findIndex(
		(product) => product.id === +id,
	);
	const productItem = state.productsData[productItemIndex];
	return productItem;
};
const filterByCategoryHandler = async (categoryName) => {
	if (categoryName === "ALl") {
		await loadProducts();
	} else {
		await getProductsByCategory(categoryName);
	}

	productsView.render(state.productsData);
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
const init = () => {
	productsView.addRenderHandler(productsController);
	categoriesView.addRenderHandler(categoriesController);
	productsView.addToCartHandler(addToCartController);
	categoriesView.addFilterByHandler(filterByCategoryHandler);
	cartView.addToCartHandler(addToCartController);
	cartView.removeFromCartHandler(removeFromCartController);
	cartView.deleteFromCartHandler(deleteProductFromCart);
};
init();
