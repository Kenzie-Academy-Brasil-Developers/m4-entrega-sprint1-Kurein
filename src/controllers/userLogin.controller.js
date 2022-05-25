import userLoginService from "../services/userLogin.services";

const userLoginController = (req, res) => {
  const { email, password } = req.body;

  const loginToken = userLoginService(email, password);

  if (!loginToken) {
    return res.status(404).json({ error: "email or password incorrect" });
  }

  return res.status(200).json({ token: loginToken });
};

export default userLoginController;
