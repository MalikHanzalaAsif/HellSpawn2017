import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies?.token; // Check for token
    if (!token) return res.status(401).send('Authentication token not provided.');

    const verified = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = {
      id: verified.id,
      name: verified.name,
      email: verified.email,
    };

    next(); // Proceed to the next middleware
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).send('Token expired, please log in again.');
    }
    res.status(400).send('Invalid token.');
  }
};

export default verifyToken;
