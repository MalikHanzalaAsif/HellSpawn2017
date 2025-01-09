import express from 'express';
const router = express.Router();
import { sendEmail } from '../controllers/orderController.js';
import asyncWrap from '../utils/asyncWrap.js';

// ROUTES
router.post("/", asyncWrap(sendEmail));

export default router;