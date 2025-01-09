import nodemailer from "nodemailer";

// send email
export const sendEmail = async (req, res, next) => {
    try {
        console.log(req.body);
        const { name, email, number, message } = req.body;

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.FROM_EMAIL_PASS,
            },
        });

        // Email options
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

        // Send email asynchronously
        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent successfully:", info.response);
        res.json({ success: "Order placed successfully :)" });
    } catch (err) {
        console.error("Error sending email:", err);
        next(err); // Pass the error to the error-handling middleware
    }
}