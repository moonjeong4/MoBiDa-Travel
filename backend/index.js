import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoutes from "./routes/tours.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import reviewRoutes from "./routes/reviews.js";
import bookingRoutes from "./routes/booking.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
  credentials: true,
};

//database connection
// mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.log("error connecting to DB");
  }
};

//for testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/v1/tours", tourRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/booking", bookingRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server is running on port`, port);
});
