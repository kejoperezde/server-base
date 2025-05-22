const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ error: "No se proporcionó un token de acceso" });
  }

  jwt.verify(token, "secreto", (error, decoded) => {
    if (error) {
      return res.status(403).json({ error: "Token no válido" });
    }
    req.userId = decoded.userId;
    next();
  });
};
