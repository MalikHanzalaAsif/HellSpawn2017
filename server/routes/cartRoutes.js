import express from "express";
const router = express.Router({ mergeParams: true });
import asyncWrap from "../utils/asyncWrap.js";
import { addToCart, getCart } from "../controllers/cartController.js";
import verifyToken from "../utils/verifyToken.js";


router.route('/cart')
.get(verifyToken, asyncWrap(getCart))
.post(verifyToken, asyncWrap(addToCart));


export default router;