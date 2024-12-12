import express from "express";
const app = express();
const port = 8081;
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

// MIDDLEWARES
// to allow requests from frontend request
app.use(cors({
    origin: process.env.CLIENT_URL,
}));

// For parsing the urlencoded data of post req body;
app.use(express.urlencoded({ extended: true }));

// For parsing the json data of post req body;
app.use(express.json());


app.post('/order', (req, res) => {
    try {
        console.log(req.body);
        let { name, email, number, message } = req.body;
        // Send Email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.FROM_EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.FROM_EMAIL,
            to: process.env.TO_EMAIL,
            subject: "New Order on HellSpawn2017",
            text: `
                   NAME: ${name}
                   EMAIL: ${email}
                   MESSAGE: ${message}
                   CONTACT: ${number}
                   `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error sending email:", error);
            } else {
                console.log("Email sent successfully:", info.response);
            }
        });
        res.json({ "success": "order placed succesfully :)" })
    } catch (err) {
        next(err);
    }
});


// Error Middlewares
// UNKNOWN PATH ERROR MIDDLEWARE
app.all("*", (req, res, next) => {
    const error = new Error("Page not found!");
    error.status = 404;
    next(error);
});

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    res.status(err.status || 400).json({ "error": err.message });
    console.log(err.message);
    // res.status(err.status || 500).send(err.message || "something went wrong!");
});

app.listen(port, () => {
    console.log(`app is listening to port: ${port}!`);
});