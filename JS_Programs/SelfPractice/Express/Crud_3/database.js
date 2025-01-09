// Import mongoose
const mongoose = require('mongoose');
require('dotenv');
// MongoDB connection string
const uri = process.env.DB_URI; // Replace with your MongoDB URI

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((err) => {
        console.error("MongoDB connection error: ", err);
    });
