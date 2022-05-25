import userProfileService from "../services/userProfile.service";

const userProfileController = (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "missing auth token" });
  }

  const user = userProfileService(token);

  if (user === "token error") {
    return res.status(401).json({ error: "invalid token" });
  }

  res.status(200).json(user);
};

export default userProfileController;
