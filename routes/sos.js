import express from "express";
import SOSRequest from "../models/SOSRequest.js";

const router = express.Router();

// Create SOS request
router.post("/create", async (req, res) => {
  try {
    const { userId, location } = req.body;
    const sos = new SOSRequest({ userId, location });
    await sos.save();
    res.json({ msg: "SOS request sent successfully!", sos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all SOS requests
router.get("/all", async (req, res) => {
  try {
    const sosList = await SOSRequest.find().populate("userId");
    res.json(sosList);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
