import fetch from "cross-fetch";
import {
	getALlCategories,
	getAllProducts,
	getProductsByCategory,
} from "../../model.service";

beforeAll(() => {
	global.fetch = fetch;
});
afterAll(() => {
	global.fetch = undefined;
});
describe("getAllProducts", () => {
	it("should return  All products", async () => {
		const products = await getAllProducts();
		expect(products.length).not.toBe(0);
	});
});
describe("getALlCategories", () => {
	it("should return  All Categories", async () => {
		const products = await getALlCategories();
		expect(products.length).not.toBe(0);
	});
});
describe("getProductsByCategory", () => {
	it("should return  All Categories", async () => {
		const products = await getProductsByCategory(2);
		expect(products.length).not.toBe(0);
	});
	it("should throw error if Id Not Found ", async () => {
		await expect(getProductsByCategory()).rejects.toThrow(Error);
	});
});
describe("getProductsByCategory", () => {
	it("should return  All Categories", async () => {
		const products = await getProductsByCategory(2);
		expect(products.length).not.toBe(0);
	});
	it("should throw error if Id Not Found ", async () => {
		await expect(getProductsByCategory()).rejects.toThrow(Error);
	});
});
