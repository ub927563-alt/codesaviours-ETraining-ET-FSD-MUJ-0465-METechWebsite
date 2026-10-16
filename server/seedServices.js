require("dotenv").config();
const mongoose = require("mongoose");
const Service = require("./models/Service");

const services = [
  {
    title: "Electrical Engineering",
    slug: "electrical-engineering",
    description: "Professional electrical engineering design and consulting services.",
    category: "Electrical Engineering",
    isActive: true,
  },
  {
    title: "Solar PV Systems",
    slug: "solar-pv-systems",
    description: "Solar power system design and renewable energy solutions.",
    category: "Solar PV",
    isActive: true,
  },
  {
    title: "Battery Energy Storage Systems",
    slug: "battery-energy-storage-systems",
    description: "Battery storage solutions for reliable and efficient energy management.",
    category: "BESS",
    isActive: true,
  },
  {
    title: "EV Charging",
    slug: "ev-charging",
    description: "Electric vehicle charging infrastructure planning and design.",
    category: "EV Charging",
    isActive: true,
  },
  {
    title: "Architecture and Building Design",
    slug: "architecture-building-design",
    description: "Building planning, architectural design, and development services.",
    category: "Architecture and Building Design",
    isActive: true,
  },
  {
    title: "Civil and Structural Engineering",
    slug: "civil-structural-engineering",
    description: "Civil engineering and structural design solutions for building projects.",
    category: "Civil and Structural Engineering",
    isActive: true,
  },
];

async function seedServices() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await Service.deleteMany({});
    await Service.insertMany(services);

    console.log("Six engineering services added successfully!");
  } catch (error) {
    console.error("Error adding services:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

seedServices();