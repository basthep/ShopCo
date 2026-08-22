import api from "./api";


const getProducts = async (filters = {}) => {

    const response = await api.get("/products", {
        params: filters,
    });

    return response.data;
};


const getProductById = async (id) => {

    const response =
        await api.get(`/products/${id}`);

    return response.data;
};


const getReviewsByProductId = async (productId) => {

    const response =
        await api.get(`/products/${productId}/reviews`);

    return response.data;
};


const getFaqsByProductId = async (productId) => {

    const response =
        await api.get(`/products/${productId}/faqs`);

    return response.data;
};


export {
    getProducts,
    getProductById,
    getReviewsByProductId,
    getFaqsByProductId,
};