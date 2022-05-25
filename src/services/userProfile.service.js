import jwt from "jsonwebtoken";
import users from "../database";

const userProfileService = (token) => {
  const user = jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return "token error";
    }

    const foundUser = users.find((user) => user.email === decoded.email);

    return foundUser;
  });

  return user;
};

export default userProfileService;
