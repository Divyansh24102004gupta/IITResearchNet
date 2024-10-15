import express from "express";
import {
  deleteJob,
  getAllColleges,
  getAllJobs,
  getAllJobsByCollegeId,
  getMyJobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/jobController.js";
import portectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/getall", getAllJobs);
router.get("/getallcolleges", getAllColleges);
router.get("/college/:id", getAllJobsByCollegeId);
router.post("/post", portectRoute, postJob);
router.get("/getmyjobs", portectRoute, getMyJobs);
router.put("/update/:id", portectRoute, updateJob);
router.delete("/delete/:id", portectRoute, deleteJob);
router.get("/:id", portectRoute, getSingleJob);

export default router;
