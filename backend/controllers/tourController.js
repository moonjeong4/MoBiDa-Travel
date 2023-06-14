import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(201).json({
      success: true,
      message: "Tour created successfully",
      data: savedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create.Try again" });
  }
};

//update tour
export const updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Tour updated successfully",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update.Try again",
    });
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(201).json({
      success: true,
      message: "Tour deleted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete.Try again" });
  }
};

//get all tours
export const getAllTours = async (req, res) => {
  const page = parseInt(req.query.page);
  console.log(page);
  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      message: "Tours fetched successfully",
      data: tours,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Failed to fetch.Try again" });
  }
};

//get single tour
export const getSingleTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate("reviews");
    res.status(201).json({
      success: true,
      message: "Tour fetched successfully",
      data: tour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch.Try again" });
  }
};

//search tours
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i"); //i for case insensitive
  // const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      // distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Tours fetched successfully",
      data: tours,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Failed to fetch.Try again" });
  }
};

//get featured tours
export const getFeaturedTours = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      success: true,
      count: Tour.length,
      message: "Featured tours fetched successfully",
      data: tours,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Failed to fetch.Try again" });
  }
};

//get tours counts
export const getToursCount = async (req, res) => {
  try {
    const toursCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      message: "Tours count fetched successfully",
      data: toursCount,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Failed to fetch.Try again" });
  }
};
