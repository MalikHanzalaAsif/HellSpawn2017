import express from "express";
const app = express();
const port = 8081;
import cors from "cors";
import nodemailer from "nodemailer";

// MIDDLEWARES
// to allow requests from frontend request
app.use(cors({
  origin: 'http://localhost:5173' 
}));

// For parsing the urlencoded data of post req body;
app.use(express.urlencoded({extended : true}));

// For parsing the json data of post req body;
app.use(express.json());


app.post('/order',(req,res) => {
    try{
        console.log(req.body);
        let { name, email, number, message } = req.body;
        // Send Email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "phantompubgm613@gmail.com",
                pass: "batz xhng jfpi okef",
            },
        });
        
        const mailOptions = {
            from: "phantompubgm613@gmail.com",
            to: "malikhanzalaasif@gmail.com",
            subject: "New Order on HellSpawn2017",
            text: `
            name: ${name}
                   email: ${email}  
                   message: ${message}
                   Contact: ${number}
                   `
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error sending email:", error);
            } else {
                console.log("Email sent successfully:", info.response);
            }
        });
        res.json({"success": "order placed succesfully :)"})
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
app.use((err,req,res,next) => {
    res.status(err.status || 400).json({"error": err.message});
    console.log(err.message);
    // res.status(err.status || 500).send(err.message || "something went wrong!");
});

app.listen(port,() => {
    console.log(`app is listening to port: ${port}!`);
});