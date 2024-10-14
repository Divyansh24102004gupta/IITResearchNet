import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";
import { app, server } from "./socket/socket.js";

import authRoutes from "./routes/auth.routes.js";
import messageRooutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import jobRouter from "./routes/jobRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

const port = process.env.PORT || 8000;

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRooutes);
app.use("/api/users", userRoutes);
app.use("/api/job", jobRouter);
app.use("/api/application", applicationRouter);

server.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port no. ${port}`);
});
