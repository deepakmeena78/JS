import mongoose from 'mongoose';


const OrderItemShema = new mongoose.Schema({
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    Quantity:{
        type: Number,
        required: true
    }
});

const OrderShema = new mongoose.Schema({
    orderPrice: {
        type: String,
        required: true
    },
    costomer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    OrderItem: {
        type: [OrderItemShema]
    },
    Address: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        enum: ["PENDING","CANCELLED","DELIVERED"],
        default: "PENDING"
    },
    Owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true })

export const Order = mongoose.model("Order", OrderShema)
