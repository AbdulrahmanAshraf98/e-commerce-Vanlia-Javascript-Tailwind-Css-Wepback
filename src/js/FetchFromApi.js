export const fetchFromFakeStoreApi = async (url) => {
	const baseUrl = "https://api.escuelajs.co/api/v1";
	try {
		const response = await fetch(`${baseUrl}/${url}`);
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		throw new Error(error);
	}
};
