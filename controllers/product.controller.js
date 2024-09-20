const productModel = require("../models/product.model");


exports.createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const images = req.files.map(file => file.publicUrl).filter(url => url ? true : false);

        if (!name || !description || !price) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const product = await productModel.create({
            name, description, price, images, seller: req.user._id
        });

        res.status(201).json({
            message: "Product created successfully",
        });
    } catch (error) {
        res.status(500).json(error);
    }
}