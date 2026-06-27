


import express from "express";
import {
  placeOrder,
  getMyOrders,
  getOrderByIdForUser,
  cancelMyOrder,
  estimateFare,
} from "../controllers/orderController.js";
import { requireSignIn, isUser } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post("/place", requireSignIn, isUser, placeOrder);
router.post("/estimate-fare", requireSignIn, isUser, estimateFare);

router.get("/my-orders", requireSignIn, isUser, getMyOrders);
router.get("/order/:orderId", requireSignIn, isUser, getOrderByIdForUser);
router.put("/cancel/:orderId", requireSignIn, isUser, cancelMyOrder);

export default router;