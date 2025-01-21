import express from "express";
const router = express.Router({ mergeParams: true });
import asyncWrap from "../utils/asyncWrap.js";
import { addToCart, getCart, removeFromCart, addQuantity, substractQuantity, changeSize } from "../controllers/cartController.js";
import verifyToken from "../utils/verifyToken.js";


router.route('/cart')
.get(verifyToken, asyncWrap(getCart))
.post(verifyToken, asyncWrap(addToCart));

router.delete("/cart/:id", verifyToken, asyncWrap(removeFromCart));

router.patch("/cart/add/:id", verifyToken, asyncWrap(addQuantity));
router.patch("/cart/sub/:id", verifyToken, asyncWrap(substractQuantity));
router.patch("/cart/size/:id", verifyToken, asyncWrap(changeSize));

export default router;