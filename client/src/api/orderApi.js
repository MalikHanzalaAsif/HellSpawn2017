import axios from "axios";
import toastEmitter from "../components/ui/toast";

export const verifyPaymentApi = async (orderId, formData) => {
    try {
        let response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/verify-payment`, {orderId, formData}, {withCredentials: true});
        console.log("Payment verified:", response.data);
        toastEmitter({
            title: response.data.message,
            type: response.data.type,
        });
    } catch (error) {
        console.error("Failed to verify payment:", error);
    }
};