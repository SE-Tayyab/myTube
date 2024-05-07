// index.js
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js"; // Import app from app.js

dotenv.config({
  path: "./.env",
});

// Connect to MongoDB database
connectDb()
  .then(() => {
    console.log("Connected to MongoDB on Port", process.env.PORT);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.error("Error listen to app:", err);
  });
