import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./routers/user.routes.js";
import studentInfoRouter from "./routers/studentInfo.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173" || process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// router
app.use("/api/v1/users", userRouter);
app.use("/api/v1/student", studentInfoRouter);

export { app };
