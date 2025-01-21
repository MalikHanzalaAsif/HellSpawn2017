import mongoose from "mongoose";
const { Schema } = mongoose;

const cartSchema = new Schema(
  {
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
        size: {type: String, required: true},
      },
    ],
  },
  {
    timestamps: true,  // automatically adds createdAt and updatedAt fields
  }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
