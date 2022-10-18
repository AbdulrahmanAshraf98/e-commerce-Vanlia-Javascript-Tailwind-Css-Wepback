export const fetchFromFakeStoreApi = async (url) => {
	const baseUrl = "https://fakestoreapi.com";
	try {
		const response = await fetch(`${baseUrl}/${url}`);
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		throw new Error(error);
	}
};
