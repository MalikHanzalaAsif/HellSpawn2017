import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
    try {
        const { id } = req.user;
        const existingCart = await Cart.findOne({ userId: id });
        if (!existingCart) {
            const newCart = new Cart({ userId: id, items: [req.body] });
            await newCart.save();
            res.json({
                message: "item added to cart",
                type: "success"
            });
            console.log("added to cart!");
            return;
        }

        const existingItemIndex = existingCart.items.findIndex((item) => item.id === req.body.id);
        if (existingItemIndex > -1) {
            existingCart.items[existingItemIndex].quantity += 1;
        } else {
            existingCart.items.push(req.body);
        }
        await existingCart.save();
        res.json({
            message: "item added to cart",
            type: "success"
        });
        console.log("added to cart!");
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "an error occured while adding to cart!",
            type: "error"
        });
    }
};