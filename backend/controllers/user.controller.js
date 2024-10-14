import { User } from "../models/user.model.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUser = catchAsyncErrors((req, res, next) => {
  const user = req.user;
  return res.status(200).json({
    success: true,
    user,
  });
});
