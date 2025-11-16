import mongoose from "mongoose";

const sosSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  location: { type: String, required: true },
  time: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" },
});

export default mongoose.model("SOSRequest", sosSchema);
