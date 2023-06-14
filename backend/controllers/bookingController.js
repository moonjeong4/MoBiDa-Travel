import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  console.log(newBooking);
  try {
    const savedBooking = await newBooking.save();
    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: savedBooking,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create.Try again" });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);

    res.status(200).json({
      success: true,
      message: "Booking fetched successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch.Try again",
    });
  }
};

export const getAllBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const books = await Booking.find();

    res.status(200).json({
      success: true,
      message: "Booking fetched successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch.Try again",
    });
  }
};
