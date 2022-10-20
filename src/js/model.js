import { fetchFromFakeStoreApi } from "./FetchFromApi";

export const state = {
	productsData: [],
	Categories: [],
	productDetails: {},
	cartItems: [],
};
export const loadProducts = async () => {
	try {
		const responseData = await fetchFromFakeStoreApi("products");
		console.log(responseData);

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
export const loadProductDetails = async (id) => {
	try {
		const responseData = await fetchFromFakeStoreApi(`products/${id}`);
		state.productDetails = responseData;
	} catch (error) {
		throw new Error(error.message);
	}
};
export const getALlCategories = async () => {
	try {
		const responseData = await fetchFromFakeStoreApi("categories");
		console.log(responseData);
		state.Categories = responseData.slice(0, 5);
	} catch (error) {
		throw new Error(error.message);
	}
};
export const getProductsByCategory = async (id) => {
	try {
		const responseData = await fetchFromFakeStoreApi(
			`categories/${id}/products`,
		);
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
export const addToCart = (productItem) => {
	let newCartItems = [];
	const existingCartItemIndex = state.cartItems.findIndex((cartItem) => {
		return cartItem.id === productItem.id;
	});
	const existingCartItem = state.cartItems[existingCartItemIndex];
	if (!existingCartItem) {
		newCartItems = [...state.cartItems, { ...productItem, quantity: 1 }];
	} else {
		const updateExistingCartItem = {
			...existingCartItem,
			quantity: existingCartItem.quantity + 1,
		};
		newCartItems = [...state.cartItems];
		newCartItems[existingCartItemIndex] = updateExistingCartItem;
	}
	state.cartItems = newCartItems;
	localStorage.setItem("cartItems", JSON.stringify(newCartItems));
};
export const removeFromCart = (id) => {
	let newCartItems = [];
	const existingCartItemIndex = state.cartItems.findIndex(
		(item) => item.id === +id,
	);
	const existingCartItem = state.cartItems[existingCartItemIndex];
	if (existingCartItem.quantity > 1) {
		const updateExistingCartItem = {
			...existingCartItem,
			quantity: existingCartItem.quantity - 1,
		};
		newCartItems = [...state.cartItems];
		newCartItems[existingCartItemIndex] = updateExistingCartItem;
	} else {
		newCartItems = state.cartItems.filter((cartItem) => cartItem.id !== +id);
	}
	state.cartItems = newCartItems;
	localStorage.setItem("cartItems", JSON.stringify(newCartItems));
};
export const deleteFromCart = (id) => {
	const newCartItems = state.cartItems.filter(
		(cartItem) => cartItem.id !== +id,
	);
	state.cartItems = newCartItems;
	localStorage.setItem("cartItems", JSON.stringify(newCartItems));
};
const init = () => {
	const cartStorage = localStorage.getItem("cartItems");
	if (cartStorage) state.cartItems = JSON.parse(cartStorage);
};
init();