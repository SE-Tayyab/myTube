import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";

dotenv.config({
  path: "../env",
});

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Connect to MongoDB database
connectDb()
  .then(() => {
    console.log("Connected to MongoDB");

    console.log(process.env.PORT, "lol");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    // Error connecting to the database
    console.error("Error connecting to MongoDB:", err);
  });
