import express from "express";
import protectRoute from "./../middlewares/protectRoute.js";
import {
  getUsersForSideBar,
  getUser,
} from "./../controllers/user.controller.js";
const router = express.Router();

router.get("/", protectRoute, getUsersForSideBar);
router.get("/getuser", protectRoute, getUser);

export default router;
