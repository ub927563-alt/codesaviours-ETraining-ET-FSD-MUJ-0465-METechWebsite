const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    schedule: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
    },
    enrolledCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed", "cancelled"],
      default: "upcoming",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Batch", batchSchema);