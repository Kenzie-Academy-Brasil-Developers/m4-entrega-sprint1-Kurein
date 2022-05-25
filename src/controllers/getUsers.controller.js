import getUsersServices from "../services/getUsers.services";

const getUsersController = (_, res) => {
  return res.status(200).json(getUsersServices());
};

export default getUsersController;
