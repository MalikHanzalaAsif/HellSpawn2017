import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        orderId: { type: String, required: true, unique: true },
        transactionId: { type: String, required: true, unique: true },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        items: [
            {
                category: { type: String, required: true },
                id: { type: String, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                title: { type: String, required: true },
                quantity: { type: Number, required: true, min: 1 },
                size: { type: String, required: true },
            },
        ],
        orderDetails: { type: Object, required: true },
        total: { type: Number, required: true },
    },
    {
        timestamps: true,  // automatically adds createdAt and updatedAt fields
    }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;