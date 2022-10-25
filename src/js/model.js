import { fetchFromFakeStoreApi } from "./FetchFromApi";
import { addToCart, deleteFromCart, removeFromCart } from "./Helpers/Cart/cart";
import {
	getALlCategories,
	getAllProducts,
	getProductsByCategory,
} from "./model.service";

export const state = {
	productsData: [],
	Categories: [],
	productDetails: {},
	cart: {
		cartItems: [],
		totalQuantity: 0,
	},
};
export const loadProducts = async () => {
	try {
		const responseData = await getAllProducts();

		state.productsData = responseData.map((product) => {
			return {
				...product,
				price: parseInt(product.price),
				image: product.images[0],
			};
		});
		return state.productsData;
	} catch (error) {
		throw new Error(error.message);
	}
};
export const loadProductDetails = async (id) => {
	try {
		const responseData = await fetchFromFakeStoreApi(`products/${id}`);
		state.productDetails = responseData;
	} catch (error) {
		throw new Error(error.message);
	}
};
export const loadALlCategories = async () => {
	try {
		const responseData = await getALlCategories();
		state.Categories = responseData.slice(0, 5);
	} catch (error) {
		throw new Error(error.message);
	}
};
export const loadProductsByCategory = async (id) => {
	try {
		const responseData = await getProductsByCategory(id);
		state.productsData = responseData.map((product) => {
			return {
				...product,
				price: parseInt(product.price),
				image: product.images[0],
			};
		});
	} catch (error) {
		throw new Error(error.message);
	}
};

export const addItemToCart = (productItem) => {
	const { cartItems } = state.cart;
	let newCartItems = addToCart(productItem, cartItems);
	state.cart.cartItems = newCartItems;
	state.cart.totalQuantity = state.cart.totalQuantity + 1;

	localStorage.setItem("cart", JSON.stringify(state.cart));
};

export const removeItemFromCart = (id) => {
	const { cartItems } = state.cart;
	let newCartItems = removeFromCart(id, cartItems);
	state.cart.cartItems = newCartItems;
	state.cart.totalQuantity = state.cart.totalQuantity - 1;
	localStorage.setItem("cart", JSON.stringify(state.cart));
};

export const deleteItemFromCart = (id) => {
	const { cartItems } = state.cart;
	state.cart.cartItems = deleteFromCart(id, cartItems);
	state.cart.totalQuantity = state.cart.cartItems.reduce(
		(accumulator, current) => {
			return accumulator + current.quantity;
		},
		0,
	);
	localStorage.setItem("cart", JSON.stringify(state.cart));
};
const init = () => {
	const cartStorage = localStorage.getItem("cart");
	if (cartStorage) state.cart = JSON.parse(cartStorage);
};
init();
