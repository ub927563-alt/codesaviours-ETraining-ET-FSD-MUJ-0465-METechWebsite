const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Electrical Engineering",
        "Solar PV",
        "BESS",
        "EV Charging",
        "Architecture and Building Design",
        "Civil and Structural Engineering",
      ],
      required: true,
    },
    location: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    completionDate: {
      type: Date,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);