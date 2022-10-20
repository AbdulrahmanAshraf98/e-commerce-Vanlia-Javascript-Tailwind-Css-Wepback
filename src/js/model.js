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
		
		state.productsData = responseData.map((product) => {
			return {
				...product,
				price: parseInt(product.price),
			};
		});
		
	} catch (error) {}
};
export const loadProductDetails = async (id) => {
	try {
		const responseData = await fetchFromFakeStoreApi(`products/${id}`);
		state.productDetails = responseData;
	} catch (error) {}
};
export const getALlCategories = async () => {
	try {
		const responseData = await fetchFromFakeStoreApi("products/categories");
		state.Categories = responseData;
	} catch (error) {}
};
export const getProductsByCategory = async (categoryName) => {
	try {
		const responseData = await fetchFromFakeStoreApi(
			`products/category/${categoryName}`,
		);
		state.productsData = responseData.map((product) => {
			return {
				...product,
				price: parseInt(product.price),
			};
		});
	} catch (error) {}
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