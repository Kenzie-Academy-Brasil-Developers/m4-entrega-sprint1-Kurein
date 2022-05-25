import deleteUserService from "../services/deleteUser.services";

const deleteUserController = (req, res) => {
  const { id } = req.params;

  const response = deleteUserService(id);

  if (response === "not found") {
    return res.status(404).json({ error: "user not found" });
  }

  return res.status(200).json({ message: "user deleted successfully" });
};

export default deleteUserController;
