const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: [ {
        type: String,
    } ],
    seller: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, { timestamps: true });

const Product = mongoose.model("product", productSchema);

module.exports = Product;