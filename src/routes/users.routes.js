import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import getUsersController from "../controllers/getUsers.controller";
import userLoginController from "../controllers/userLogin.controller";
import userProfileController from "../controllers/userProfile.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import updateUserController from "../controllers/updateUser.controller";

import verifyEmail from "../middlewares/verifyEmail.middleware";
import admAuth from "../middlewares/admAuth.middleware";
import userAuth from "../middlewares/userAuth.middleware";

const router = Router();

router.post("/users", verifyEmail, createUserController);
router.post("/login", userLoginController);
router.get("/users", admAuth, getUsersController);
router.get("/users/profile", userProfileController);
router.patch("/users/:id", userAuth, updateUserController);
router.delete("/users/:id", userAuth, deleteUserController);

export default router;
