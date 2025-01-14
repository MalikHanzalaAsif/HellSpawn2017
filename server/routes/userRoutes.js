import express from "express";
const router = express.Router({ mergeParams: true });
import asyncWrap from "../utils/asyncWrap.js";
import expressError from "../utils/expressError.js";
import User from "../models/User.js";
import passport from "passport";
import { signup, login } from "../controllers/userController.js";


router.post("/signup", asyncWrap(signup));

router.post("/login", (req,res,next) => {
    if(req.isAuthenticated()){
        return res.json({success: "already logged in!"});
    } else{
        next();
    };
}, passport.authenticate('local'), asyncWrap(login));

export default router;