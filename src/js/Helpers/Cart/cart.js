export const addToCart = (productItem, cartItems) => {
	let newCartItems = [];
	const existingCartItemIndex = cartItems.findIndex((cartItem) => {
		return cartItem.id === productItem.id;
	});
	const existingCartItem = cartItems[existingCartItemIndex];
	if (!existingCartItem) {
		newCartItems = [...cartItems, { ...productItem, quantity: 1 }];
	} else {
		const updateExistingCartItem = {
			...existingCartItem,
			quantity: existingCartItem.quantity + 1,
		};
		newCartItems = [...cartItems];
		newCartItems[existingCartItemIndex] = updateExistingCartItem;
	}
	return newCartItems;
};
export const removeFromCart = (id, cartItems) => {
	let newCartItems = [];
	const existingCartItemIndex = cartItems.findIndex((item) => item.id === +id);
	const existingCartItem = cartItems[existingCartItemIndex];
	if (existingCartItem.quantity > 1) {
		const updateExistingCartItem = {
			...existingCartItem,
			quantity: existingCartItem.quantity - 1,
		};
		newCartItems = [...cartItems];
		newCartItems[existingCartItemIndex] = updateExistingCartItem;
	} else {
		newCartItems = cartItems.filter((cartItem) => cartItem.id !== +id);
	}
	return newCartItems;
};
export const deleteFromCart = (id, cartItems) => {
	const newCartItems = cartItems.filter((cartItem) => cartItem.id !== +id);
	return newCartItems;
};
