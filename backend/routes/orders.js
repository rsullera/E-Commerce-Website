import express from "express";
import Order from "../models/Order.js";
import { protect } from "../middleware/auth.js"; // auth middleware

const router = express.Router();

// ✅ Create new order
router.post("/", protect, async (req, res) => {
  try {
    // Sanitize items
    const sanitizedItems = req.body.items.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
      ...(item.productId && /^[0-9a-fA-F]{24}$/.test(item.productId)
        ? { productId: item.productId }
        : {}),
    }));

    const orderData = {
      user: req.user._id,
      items: sanitizedItems,
      totalAmount: req.body.totalAmount,
      status: req.body.status || "Pending",
      trackingNumber: `TRK-${Date.now()}`, // auto generate tracking
    };

    const order = new Order(orderData);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error("Order creation error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get all orders (Admin)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get logged-in user's orders
router.get("/my", protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update order status (Admin)
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
