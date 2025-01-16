import express from "express";
const router = express.Router({ mergeParams: true });
import asyncWrap from "../utils/asyncWrap.js";
import expressError from "../utils/expressError.js";
import User from "../models/User.js";
import passport from "passport";
import { signup, login, logout, getUser } from "../controllers/userController.js";
import verifyToken from "../utils/verifyToken.js";


router.post("/signup", asyncWrap(signup));

router.post("/login", asyncWrap(login));

router.post('/logout', logout);

router.get("/user",verifyToken, getUser);


export default router;