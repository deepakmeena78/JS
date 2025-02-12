import mongoose from "mongoose";

const HelpSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Category",
        required: true
    },
    location: {
        type: String,
        required: true
    },
    postedby: {
        type: String,
        required: true
    },
    appliedAt: {
        type: String,
    },
    updatedAt: {
        type: String
    },
    deletedAt: {
        type: String
    }
});

const Help = mongoose.model("Help", HelpSchema);
export default Help;
