import axios from "axios";

export const verifyPaymentApi = async (orderId, transactionId, formData) => {
    try {
        let response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/verify-payment`, {orderId, transactionId}, {withCredentials: true});
        console.log("Payment verified:", response.data);
    } catch (error) {
        console.error("Failed to verify payment:", error);
    }
};