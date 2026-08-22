import api from "./api";

const getCart = async () => {
    const response = await api.get("/cart");

    return response.data;
};


const addToCart = async (
    productId,
    quantity,
    size,
    color
) => {
    const response = await api.post("/cart", {
        productId,
        quantity,
        size,
        color,
    });

    return response.data;
};


const updateCartItem = async (
    cartId,
    quantity
) => {
    const response = await api.put(
        `/cart/${cartId}`,
        {
            quantity,
        }
    );

    return response.data;
};


const removeFromCart = async (cartId) => {
    const response = await api.delete(
        `/cart/${cartId}`
    );

    return response.data;
};


const clearCart = async () => {
    const response =
        await api.delete("/cart");

    return response.data;
};


export {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
};