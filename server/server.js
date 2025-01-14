import express from "express";
const app = express();
const port = 8081;
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();
const dbUrl = process.env.MONGODB_URL;
import orderRoutes from "./routes/contactRoutes.js";
import passport from "passport";
import LocalStrategy from "passport-local";
import MongoStore from "connect-mongo";
import session from "express-session";
import User from "./models/User.js";
import expressError from "./utils/expressError.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

// DB CONNECTION
mongoose.connect(dbUrl)
    .then(() => console.log("connected to database"))
    .catch((err) => console.log("error connecting to database: ", err));



// MIDDLEWARES
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET
    },
    touchAfter: 24 * 3600
});
app.use(session({
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        sameSite: 'none',
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true
    }
}));
app.use((req, res, next) => {
    console.log('User:', req.user);
    next();
});
// User Authentication Middlewares using passport,passport-local and passport-local-mongoose
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// ROUTES
app.use("/contact", orderRoutes);
app.use(userRoutes);

app.get('/dashboard', (req, res) => {
    console.log(req.isAuthenticated())
});



// Error Middlewares
// UNKNOWN PATH ERROR MIDDLEWARE
// app.all("*", (req, res, next) => {
//     const error = new expressError(404, "Page not found!");
//     next(error);
// });

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    res.status(err.status || 400).json({ error: err.message });
    console.log(err.message);
});

app.listen(port, () => {
    console.log(`App is listening to port: ${port}!`);
});
