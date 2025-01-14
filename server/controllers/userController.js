import User from "../models/User.js";


export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = { username, email };
    User.register(newUser, password, (err, user) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: err.message });
        }
        req.login(user, (err) => {
            if (err) {
                console.error('Login error:', err);
                return res.status(500).json({ error: 'Login failed after registration.' });
            } else {
                console.log("signup succesfull.", user)
                res.json({ success: "signup succesfull." });
                return;
            }
        });
    });
};

export const login = async (req, res) => {
        console.log("logged in succesfully!");
        res.status(200).send({succes: "logged in succesfully!"});
};