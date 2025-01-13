import express from "express";
const app = express();
const port = 8081;
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();
import orderRoutes from "./routes/contactRoutes.js"

// DB CONNECTION
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("connected to database"))
.catch((err) => console.log("error connecting to database: ", err));

// MIDDLEWARES
app.use(cors({
    origin: process.env.CLIENT_URL,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use("/contact", orderRoutes);

// Error Middlewares
// UNKNOWN PATH ERROR MIDDLEWARE
app.all("*", (req, res, next) => {
    const error = new Error("Page not found!");
    error.status = 404;
    next(error);
});

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    res.status(err.status || 400).json({ error: err.message });
    console.log(err.message);
});

app.listen(port, () => {
    console.log(`App is listening to port: ${port}!`);
});
