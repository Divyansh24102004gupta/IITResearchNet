import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { Job } from "../models/jobSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/user.model.js";
import { College } from "../models/collegeSchema.js";

export const getAllJobs = catchAsyncErrors(async (req, res, next) => {
  const jobs = await Job.find({ expired: false }).populate({
    path: "postedBy",
  });
  //constpostedBy =
  res.status(200).json({
    success: true,
    jobs,
  });
});

export const postJob = catchAsyncErrors(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const {
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
  } = req.body;

  if (!title || !description || !category || !country || !city || !location) {
    return next(new ErrorHandler("Please provide full job details.", 400));
  }

  if ((!salaryFrom || !salaryTo) && !fixedSalary) {
    return next(
      new ErrorHandler(
        "Please either provide fixed salary or ranged salary.",
        400
      )
    );
  }

  if (salaryFrom && salaryTo && fixedSalary) {
    return next(
      new ErrorHandler("Cannot Enter Fixed and Ranged Salary together.", 400)
    );
  }

  //const postedBy = req.user._id;
  const postedBy = await User.findById(req.user._id).populate({
    path: "username",
  });
  // const jobs = await Job.find(query)
  //   .populate({
  //     path: "company",
  //   })
  //   .sort({ createdAt: -1 });

  const job = await Job.create({
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
    postedBy,
  });

  // save the college id in database

  const isCollegeExist = await College.findOne({
    collegeName: postedBy.college || "IIT Patna",
  });
  if (!isCollegeExist) {
    await College.create({
      collegeName: postedBy.college,
    });
  }

  res.status(200).json({
    success: true,
    message: "Job Posted Successfully!",
    job,
  });
});

export const getMyJobs = catchAsyncErrors(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const myJobs = await Job.find({ postedBy: req.user._id });
  res.status(200).json({
    success: true,
    myJobs,
  });
});

export const updateJob = catchAsyncErrors(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  let job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("OOPS! Job not found.", 404));
  }
  job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Job Updated!",
  });
});

export const deleteJob = catchAsyncErrors(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("OOPS! Job not found.", 404));
  }
  await job.deleteOne();
  res.status(200).json({
    success: true,
    message: "Job Deleted!",
  });
});

export const getSingleJob = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);
    if (!job) {
      return next(new ErrorHandler("Job not found.", 404));
    }
    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    return next(new ErrorHandler(`Invalid ID / CastError`, 404));
  }
});

export const getAllJobsByCollegeId = catchAsyncErrors(
  async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const college = await College.findById(id);

    console.log("Fetched College:", college); // Check the college object

    // Check if any users belong to IIT Patna
    const usersFromIITPatna = await User.find({ college: college.collegeName });
    console.log("Users from IIT Patna:", usersFromIITPatna); // Log users from IIT Patna

    const jobs = await Job.find({ expired: false }).populate({
      path: "postedBy",
      match: { college: college.collegeName }, // Match with the actual college name
    });

    const filteredJobs = jobs.filter((job) => job.postedBy !== null);

    //constpostedBy =
    res.status(200).json({
      success: true,
      jobs: filteredJobs,
    });
  }
);

export const getAllColleges = catchAsyncErrors(async (req, res, next) => {
  console.log("divyanshu");
  const colleges = await College.find({});
  //constpostedBy =
  res.status(200).json({
    success: true,
    colleges,
  });
});
