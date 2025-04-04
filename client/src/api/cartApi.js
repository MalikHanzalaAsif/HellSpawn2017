import axios from "axios";
import toastEmitter from "../components/ui/toast";


export const addToCartApi = async (item, navigate) => {
    try {
        let response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/cart`, item, {
            withCredentials: true,
        });
        toastEmitter({
            title: response.data?.message,
            type: response.data?.type,
            customButton: "View Cart",
            navigate: navigate,
        });
    } catch (error) {
        console.log(error)
        toastEmitter({
            title: error?.message,
            type: "error",
        });
    };
};

export const getCartApi = async () => {
    try {
        let response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/cart`, {
            withCredentials: true
        });
        return response.data;
    } catch (err) {
        console.log(err)
    };
};

export const removeFromCartApi = async (id, updateCart) => { 
    try{
        if (updateCart) {
            updateCart(id);
        }
        let response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/cart/${id}`, {
            withCredentials: true
        });
        toastEmitter({
            title: response.data?.message,
            type: response.data?.type,
        });
    }  catch(err) {
        console.log(err);
        toastEmitter({
            title: err?.message,
            type: "error",
        });
    }
};

export const addQuantityApi = async (id) => { 
    try {
        const response = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/cart/add/${id}`, {} ,{
            withCredentials: true
        });
    } catch (err) {
        return;
    }
};

export const subtractQuantityApi = async (id) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/cart/sub/${id}`, {} ,{
            withCredentials: true
        });
    } catch (err) {
        return;
    };
};

export const changeSizeApi = async (id, size) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/cart/size/${id}`, { size }, {
            withCredentials: true
        });
    } catch (err) {
        return
    }
};