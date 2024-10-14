import express from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/jobController.js";
import portectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", portectRoute, postJob);
router.get("/getmyjobs", portectRoute, getMyJobs);
router.put("/update/:id", portectRoute, updateJob);
router.delete("/delete/:id", portectRoute, deleteJob);
router.get("/:id", portectRoute, getSingleJob);

export default router;
