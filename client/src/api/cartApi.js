import axios from "axios";
import toastEmitter from "../components/ui/toast";


export const addToCartApi = async (item) => {
    try {
        let response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/cart`, item, {
            withCredentials: true,
        });
        toastEmitter({
            title: response.data?.message,
            type: response.data?.type,
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
        console.log(response.data);
    } catch (err) {
        console.log(err)
    };
};