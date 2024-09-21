const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/signup", userController.signup);
router.post("/login", userController.signing);
router.post("/logout", userController.logout);
router.get("/profile", authMiddleware.isAuthenticated, userController.getProfile);

router.get('/products', authMiddleware.isAuthenticated, userController.getProducts);
router.get('/product/:id', authMiddleware.isAuthenticated, userController.getProductById);
router.get('/order/:id', authMiddleware.isAuthenticated, userController.createOrder);
router.post('/verify/:id', authMiddleware.isAuthenticated, userController.verifyPayment);

module.exports = router;