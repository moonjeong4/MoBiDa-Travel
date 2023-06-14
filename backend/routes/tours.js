import express from "express";
import {
  createTour,
  deleteTour,
  updateTour,
  getAllTours,
  getSingleTour,
  getTourBySearch,
  getFeaturedTours,
  getToursCount,
} from "../controllers/tourController.js";
const router = express.Router();
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

//create new tour
router.post("/", verifyAdmin, createTour);
//update tour
router.put("/:id", verifyAdmin, updateTour);
//delete tour
router.delete("/:id", verifyAdmin, deleteTour);
//get all tours
router.get("/", getAllTours);
//get single tour
router.get("/:id", getSingleTour);

//search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTours);
router.get("/search/getToursCount", getToursCount);

export default router;
