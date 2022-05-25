import jwt from "jsonwebtoken";

const admAuth = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "missing auth token" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: "invalid token" });
    }

    if (decoded.isAdm) {
      next();
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  });
};

export default admAuth;
