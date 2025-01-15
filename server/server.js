import express from "express";
const app = express();
const port = 8081;
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const dbUrl = process.env.MONGODB_URL;
import orderRoutes from "./routes/contactRoutes.js";
import User from "./models/User.js";
import expressError from "./utils/expressError.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

// DB CONNECTION
mongoose
  .connect(dbUrl)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log("error connecting to database: ", err));

// MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());



// ROUTES
app.use("/contact", orderRoutes);
app.use(userRoutes);




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
