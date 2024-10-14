import express from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
} from "../controllers/applicationController.js";
import portectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/post", portectRoute, postApplication);
router.get("/employer/getall", portectRoute, employerGetAllApplications);
router.get("/jobseeker/getall", portectRoute, jobseekerGetAllApplications);
router.delete("/delete/:id", portectRoute, jobseekerDeleteApplication);

export default router;
