import express from "express";
import cors from "cors";
import connectDB from "./backend/config/db.js";
import postRoute from "./backend/routes/postsRoute.js";
import categoryRoute from "./backend/routes/categoriesRoute.js";

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
