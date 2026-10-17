
const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message, inquiryType } = req.body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone, and message are required.",
      });
    }

    const validInquiryTypes = ["general", "service", "training", "quote"];
    const selectedType = validInquiryTypes.includes(inquiryType)
      ? inquiryType
      : "general";

    const lead = await Lead.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      subject: subject?.trim() || "Website inquiry",
      message: message.trim(),
      inquiryType: selectedType,
    });

    return res.status(201).json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
      leadId: lead._id,
    });
  } catch (error) {
    console.error("Lead submission error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to submit your inquiry. Please try again.",
    });
  }
});

/* Get all contact inquiries */
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve contact inquiries",
    });
  }
});


module.exports = router;
