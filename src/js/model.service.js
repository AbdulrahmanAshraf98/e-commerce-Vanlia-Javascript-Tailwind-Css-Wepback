import { fetchFromFakeStoreApi } from "./FetchFromApi";

export const getAllProducts = async () => {
	try {
		const responseData = await fetchFromFakeStoreApi("products");
		return responseData;
	} catch (err) {
		throw new Error(err);
	}
};
export const getALlCategories = async () => {
	try {
		const responseData = await fetchFromFakeStoreApi("categories");
		return responseData;
	} catch (err) {
		throw new Error(err);
	}
};
export const getProductsByCategory = async (id) => {
	try {
		if (!id) throw new Error("Id Not Found");
		const responseData = await fetchFromFakeStoreApi(
			`categories/${id}/products`,
		);
		return responseData;
	} catch (error) {
		throw new Error(error);
	}
};
