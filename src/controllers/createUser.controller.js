import createUserService from "../services/createUser.services";

const createUserController = async (req, res) => {
  const { name, email, password, isAdm } = req.body;

  const user = await createUserService(name, email, password, isAdm);

  return res.status(201).json(user);
};

export default createUserController;
