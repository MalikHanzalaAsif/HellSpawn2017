import express from "express";
const router = express.Router({ mergeParams: true });
import asyncWrap from "../utils/asyncWrap.js";
import expressError from "../utils/expressError.js";
import User from "../models/User.js";
import passport from "passport";
import { signup, login, logout } from "../controllers/userController.js";


router.post("/signup", asyncWrap(signup));

router.post("/login", asyncWrap(login));

router.get('/logout', logout);


export default router;