import axios from 'axios';
import nodemailer from 'nodemailer';
import Cart from '../models/Cart.js';

const getAccessToken = async () => {
    try {
        const auth = await axios.post(
            `${process.env.PAYPAL_SANDBOX_API}/v1/oauth2/token`,
            "grant_type=client_credentials",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                auth: {
                    username: process.env.PAYPAL_SANDBOX_CLIENT_ID,
                    password: process.env.PAYPAL_SANDBOX_SECRET,
                },
            }
        );
        console.log("Access Token:", auth.data.access_token); // Optional: For debugging
        return auth.data.access_token;
    } catch (error) {
        console.error("Failed to get access token:", error.message);
        throw new Error("Unable to fetch PayPal access token. Check your credentials and API URL.");
    }
};

const getOrderDetails = async (orderId, accessToken) => {
    try {
        const response = await axios.get(`${process.env.PAYPAL_SANDBOX_API}/v2/checkout/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log("Order Details:", response.data); // Optional: For debugging
        return response.data;
    } catch (error) {
        console.error("Failed to get order details:", error.message);
        throw new Error(`Unable to fetch details for order ID ${orderId}. Check the access token and order ID.`);
    }
};


export const sendEmails = async (formData, user, orderDetails, orderId) => {
    try {
        const cart = await Cart.findOne({ userId: user._id });
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.FROM_EMAIL_PASS,
            },
        });

        // Generate a dynamic string for all cart items, including size
        const cartItemsString = cart.items
            .map(
                (item, index) => `
                ITEM ${index + 1}:
                - Name: ${item.name}
                - Size: ${item.size || "Not specified"}  // Fallback if size is missing
                - Quantity: ${item.quantity}
                - Price: $${item.price.toFixed(2)}
                - Total: $${(item.quantity * item.price).toFixed(2)}
                `
            )
            .join("\n");

        // Construct the email
        const ownerMailOptions = {
            from: process.env.FROM_EMAIL,
            to: process.env.TO_EMAIL,
            subject: "New Order on HellSpawn2017",
            text: `
                -------- CUSTOMER DETAILS --------
                NAME: ${orderDetails.payer.name.given_name} ${orderDetails.payer.name.surname}
                EMAIL: ${orderDetails.payer.email_address}
                PHONE: ${formData.phone}
                ADDRESS: ${formData.address || "Not Provided"}
                CITY: ${formData.city || "Not Provided"}
                STATE: ${formData.state || "Not Provided"}
                ZIP CODE: ${formData.zip || "Not Provided"}
                CONTACT: ${number || "Not Provided"}
                
                -------- ORDER DETAILS --------
                ORDER ID: ${orderId}
                TOTAL: $${orderDetails.purchase_units[0].amount.value}
                CART ITEMS:
                ${cartItemsString}
                
                -------- PAYPAL ACCOUNT DETAILS --------
                ADDRESS: ${orderDetails.purchase_units[0].shipping.address.address_line_1 || "Not Provided"}
                CITY: ${orderDetails.purchase_units[0].shipping.address.admin_area_2 || "Not Provided"}
                STATE: ${orderDetails.purchase_units[0].shipping.address.admin_area_1 || "Not Provided"}
                ZIP CODE: ${orderDetails.purchase_units[0].shipping.address.postal_code || "Not Provided"}
                COUNTRY: ${orderDetails.purchase_units[0].shipping.address.country_code || "Not Provided"}
                
                -------- ADDITIONAL INFO --------
                ORDER TIME: ${orderDetails.create_time}
            `,
        };        
        const userMailOptions = {
            from: process.env.FROM_EMAIL,
            to: user.email,
            subject: "Order placed succesfully on HellSpawn2017",
            text: `Dear ${user.name}/${formData.firstName} ${formData?.lastName}! Thank you for your purchase. Your order has been placed successfully. Your order ID is ${orderId}. Check your paypal account for more details. if you have any queries feel free to reach us. Thanks!`
        };
        if (user.email === formData.email) {
            // Send email asynchronously
            const userInfo = await transporter.sendMail(userMailOptions);
            console.log("Email sent successfully to user:", userInfo.response);
        } else {
            const userMailOptions2 = {
                from: process.env.FROM_EMAIL,
                to: formData.email,
                subject: "Order placed succesfully on HellSpawn2017",
                text: `Dear ${user.name}/${formData.firstName} ${formData?.lastName}! Thank you for your purchase. Your order has been placed successfully. Your order ID is ${orderId}. Check your paypal account for more details. if you have any queries feel free to reach us. Thanks!`
            };
            // Send email asynchronously
            const userInfo = await transporter.sendMail(userMailOptions);
            console.log("Email sent successfully to first user:", userInfo.response);
            // Send email asynchronously
            const userInfo2 = await transporter.sendMail(userMailOptions2);
            console.log("Email sent successfully to second user:", userInfo2.response);
        }
    } catch (error) {
        console.error("Failed to send emails:", error);
        throw error;
    };
};

export const verifyPayment = async (req, res) => {
    const { orderId, formData } = req.body;
    const user = req.user;
    try {
        const accessToken = await getAccessToken();
        const orderDetails = await getOrderDetails(orderId, accessToken);
        if (orderDetails.status === "COMPLETED") {
            console.log("Verified Order Details:", orderDetails);
            return res.json({ message: "Payment verified.", type: "success", orderDetails });
        } else {
            return res.status(400).json({ type: "error", message: "Payment not completed." });
        }
    } catch (error) {
        console.error("Failed to verify payment:", error);
        return res.status(500).send("Failed to verify payment");
    }
};