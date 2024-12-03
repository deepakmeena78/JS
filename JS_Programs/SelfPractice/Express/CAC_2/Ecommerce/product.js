import mongoose from 'mongoose';

const ProductShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ProductImag: {
        type: Number,
    },
    price: {
        type: Number,
        default: 0,
    },
    stack: {
        type: Number,
        default: 0
    },
    cateGory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    Owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true })

export const product = mongoose.model("Product", ProductShema)
