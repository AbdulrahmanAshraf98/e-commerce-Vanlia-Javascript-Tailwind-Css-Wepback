import {
	addToCart,
	deleteFromCart,
	removeFromCart,
} from "../../Helpers/Cart/cart";

describe("addToCart", () => {
	it("should  return oneCartItem ", () => {
		expect(addToCart({ id: 1, price: 20 }, []).length).toBe(1);
	});
	it("should  return oneCartItem with quantity = 2", () => {
		const newCartItems = addToCart({ id: 1, price: 20 }, [
			{ id: 1, price: 20, quantity: 1 },
		]);
		expect(newCartItems[0]).toMatchObject({ quantity: 2 });
	});
});
describe("removeFromCart", () => {
	it("should  return empty Array", () => {
		expect(removeFromCart(1, [{ id: 1, price: 20, quantity: 1 }]).length).toBe(
			0,
		);
	});
	it("should  return oneCartItem with quantity = 1", () => {
		expect(
			removeFromCart(1, [{ id: 1, price: 20, quantity: 2 }])[0],
		).toMatchObject({ quantity: 1 });
	});
});
describe("deleteFromCart", () => {
	it("should  return empty Array", () => {
		expect(deleteFromCart(1, [{ id: 1, price: 20, quantity: 1 }]).length).toBe(
			0,
		);
	});
	it("should  return array of one item", () => {
		expect(
			deleteFromCart(1, [
				{ id: 1, price: 20, quantity: 1 },
				{ id: 2, price: 20, quantity: 1 },
			]).length,
		).toBe(1);
	});
	it("should  return array of one item id=2", () => {
		expect(
			deleteFromCart(1, [
				{ id: 1, price: 20, quantity: 1 },
				{ id: 2, price: 20, quantity: 1 },
			])[0],
		).toMatchObject({ id: 2 });
	});
});
