import express from "express";
const router = express.Router({ mergeParams: true });
import asyncWrap from "../utils/asyncWrap.js";
import verifyToken from "../utils/verifyToken.js";
import { verifyPayment } from "../controllers/orderController.js";

router.post("/verify-payment", verifyToken, asyncWrap(verifyPayment));

export default router;