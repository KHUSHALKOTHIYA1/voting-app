const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).json({ error: "token not found" });

  const token = authorization.split(" ")[1];
  if (!token) return res.status(401).json({ error: "invalid token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error); // ✅ correct variable
    res.status(401).json({ error: "invalid token" });
  }
};

const generateToken = (userData) => {
  return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: 300000 });
};

module.exports = { jwtAuthMiddleware, generateToken };
