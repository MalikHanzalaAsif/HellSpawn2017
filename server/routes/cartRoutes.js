import express from "express";
const router = express.Router({ mergeParams: true });
import asyncWrap from "../utils/asyncWrap.js";
import { addToCart } from "../controllers/cartController.js";
import verifyToken from "../utils/verifyToken.js";



router.post("/cart", verifyToken, asyncWrap(addToCart));

export default router;