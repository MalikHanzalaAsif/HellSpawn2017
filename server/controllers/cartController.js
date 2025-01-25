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
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "an error occured while adding to cart!",
            type: "error"
        });
    }
};

export const getCart = async (req, res) => {
    try {
        const { id } = req.user;
        let cart = await Cart.findOne({ userId: id });
        if (!cart) {
            cart = new Cart({ userId: id, items: [] });
            await cart.save();
        }
        res.json(cart.items);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "An error occurred while fetching cart items.",
            type: "error"
        });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { id } = req.user;
        const itemId = req.params.id;
        let cart = await Cart.findOne({ userId: id });
        if (!cart) {
            return res.status(404).json({
                message: "Cart not found",
                type: "error"
            });
        }
        const itemIndex = cart.items.findIndex(item => item.id === itemId);
        if (itemIndex === -1) {
            return res.status(404).json({
                message: "Item not found in cart",
                type: "error"
            });
        }
        cart.items.splice(itemIndex, 1);
        await cart.save();
        res.json({
            message: "Item removed from cart",
            type: "success"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "An error occurred while removing cart item.",
            type: "error"
        });
    }
};

export const addQuantity = async (req, res) => {
    try {
        const { id } = req.user;
        const itemId = req.params.id;
        let cart = await Cart.findOne({ userId: id });
        if (!cart) {
            return res.status(404).send("cart not found!");
        }
        const itemIndex = cart.items.findIndex(item => item.id === itemId);
        if (itemIndex === -1) {
            return res.status(404).send("item not found!");
        }
        cart.items[itemIndex].quantity += 1;
        await cart.save();
        res.send("quantity increased");
    } catch (err) {
        console.log(err);
        return res.send("An error occurred while increasing quantity!.");
    }
};

export const substractQuantity = async (req, res) => {
    try {
        const { id } = req.user;
        const itemId = req.params.id;
        let cart = await Cart.findOne({ userId: id });
        if (!cart) {
            return res.status(404).send("cart not found!");
        }
        const itemIndex = cart.items.findIndex(item => item.id === itemId);
        if (itemIndex === -1) {
            return res.status(404).send("item not found!");
        }
        cart.items[itemIndex].quantity -= 1;
        await cart.save();
        res.send("quantity decreased!");
    } catch (err) {
        console.log(err);
        return res.send("An error occurred while decreasing quantity!.");
    }
};

export const changeSize = async (req, res) => {
    try {
        const { id } = req.user;
        const itemId = req.params.id;
        const newSize = req.body.size;
        let cart = await Cart.findOne({ userId: id });
        if (!cart) {
            return res.status(404).send("cart not found!");
        }
        const itemIndex = cart.items.findIndex(item => item.id === itemId);
        if (itemIndex === -1) {
            return res.status(404).send("item not found!");
        }
        cart.items[itemIndex].size = newSize;
        await cart.save();
        res.send("size changed!");
    } catch (err) {
        console.log(err);
        return res.send("An error occurred while changing size!.");
    };
};