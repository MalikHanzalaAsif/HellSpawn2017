import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const port = 8081;
import cors from "cors";
import mongoose from "mongoose";
const dbUrl = process.env.MONGODB_URL;
import contactRoutes from "./routes/contactRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js"
import orderRoutes from "./routes/orderRoutes.js";
import cookieParser from "cookie-parser";

// DB CONNECTION
mongoose
  .connect(dbUrl)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log("error connecting to database: ", err));

// MIDDLEWARES
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


// ROUTES
app.use("/contact", contactRoutes);
app.use(userRoutes);
app.use(cartRoutes);
app.use(orderRoutes);




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
