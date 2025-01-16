import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('Access Denied');
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const user = {
      id: verified.id,
      name: verified.name,
      email: verified.email,
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

export default verifyToken;