import updateUserService from "../services/updateUser.services";

const updateUserController = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const updatedUser = updateUserService(id, name, email);

  if (updatedUser === "not found") {
    return res.status(404).json({ error: "user not found" });
  }

  return res.status(200).json(updatedUser);
};

export default updateUserController;
