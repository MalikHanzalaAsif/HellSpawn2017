import User from "../models/User.js";
import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import axios from 'axios';

const PAYPAL_CLIENT_ID = process.env.PAYPAL_LIVE_CLIENT_ID;
const PAYPAL_SECRET = process.env.PAYPAL_LIVE_SECRET;
const PAYPAL_API = process.env.PAYPAL_SANDBOX_API;

const getAccessToken = async () => {
    try {
        const auth = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, "grant_type=client_credentials", {
            auth: {
                username: PAYPAL_CLIENT_ID,
                password: PAYPAL_SECRET,
            },
        });
        return auth.data.access_token;
    } catch (error) {
        console.error("Failed to get access token:", error);
        throw error;
    }
};

const getOrderDetails = async (orderId, accessToken) => {
    try {
        const orderDetails = await axios.get(`${PAYPAL_API}/v2/checkout/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log("Order Details:", orderDetails.data); 
        return orderDetails.data;
    } catch (error) {
        console.error("Failed to get order details:", error);
        throw error;
    }
};

const createOrder = async (user, orderDetails, transactionId) => {
    try {
        const cart = await Cart.findOne({ userId: user.id });
        if (!cart) {
            throw new Error("Cart not found.");
        }
        const order = new Order({
            orderId: orderDetails.id,
            transactionId,
            userId: user.id,
            items: cart.items,
            orderDetails: orderDetails,
            total: orderDetails.purchase_units[0].amount.value,
        });
        await order.save();
        return order;
    } catch (error) {
        console.error("Failed to create order:", error);
        throw error;
    }
};

export const verifyPayment = async (req, res) => {
    const { orderId, transactionId } = req.body;
    const user = req.user;
    try {
        const accessToken = await getAccessToken();
        const orderDetails = await getOrderDetails(orderId, accessToken);
        if (orderDetails.status === "COMPLETED") {
            console.log("Verified Order Details:", orderDetails);
            const order = await createOrder(user, orderDetails, transactionId);
            return res.json({ message: "Payment verified.", type: "success" });
        } else {
            return res.status(400).json({ type: "error", message: "Payment not completed." });
        }
    } catch (error) {
        console.error("Failed to verify payment:", error);
        return res.status(500).send("Failed to verify payment");
    }
};