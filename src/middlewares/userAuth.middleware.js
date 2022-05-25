import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
  let token = req.headers.authorization;

  let { id } = req.params;

  if (!token) {
    return res.status(401).json({ error: "missing auth token" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: "invalid token" });
    }

    if (decoded.isAdm) {
      next();
    }

    if (id !== decoded.id) {
      return res.status(401).json({ error: "cannot access other users" });
    }

    next();
  });
};

export default userAuth;
