import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return false;
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return false;
  }

  const token = jwt.sign(
    { email: email, id: user.id, isAdm: user.isAdm },
    "SECRET_KEY",
    {
      expiresIn: "24h",
    }
  );

  return token;
};

export default userLoginService;
