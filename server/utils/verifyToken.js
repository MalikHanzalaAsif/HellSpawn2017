import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.json({
    title: "you aren't logged in!",
    type: "error",
  });
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
    res.json({
      title: "Something went wrong! try again.",
      type: "error"
    });
  }
};

export default verifyToken;