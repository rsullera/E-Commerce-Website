import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        name: String,
        price: Number,
        quantity: Number,
        image: String,
      },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: "Pending" },
    trackingNumber: {
      type: String,
      default: () => `TRK-${Date.now()}-${Math.floor(Math.random() * 1000)}`, // auto unique-like
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
