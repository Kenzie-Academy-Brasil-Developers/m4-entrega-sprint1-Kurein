import users from "../database";

const verifyEmail = (req, res, next) => {
  const { email } = req.body;

  const user = users.find((user) => user.email === email);

  if (user) {
    return res.status(400).json({ error: "E-mail already registered" });
  }

  next();
};

export default verifyEmail;
