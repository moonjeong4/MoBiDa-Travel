import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
} from "../controllers/userController.js";
const router = express.Router();

import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

//update tour
router.put("/:id", verifyUser, updateUser);
//delete tour
router.delete("/:id", verifyUser, deleteUser);
//get all tours
router.get("/", verifyAdmin, getAllUsers);
//get single tour
router.get("/:id", verifyUser, getSingleUser);

export default router;
