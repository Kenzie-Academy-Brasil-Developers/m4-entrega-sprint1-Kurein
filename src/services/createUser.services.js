import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (name, email, password, isAdm = false) => {
  const hashedPassword = await bcrypt.hash(password, 16);

  const date = new Date();

  const newUser = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    id: uuidv4(),
    createdOn: date.toLocaleString(),
    updatedOn: date.toLocaleString(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
