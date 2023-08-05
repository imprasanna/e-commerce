const Order = require("../models/orderModel");
const updateStock = require("../utils/updateStock");

const makeNewOrder = async (req, res) => {
  try {
    const {
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    const order = await Order.create({
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get logged in user order
const getSingleOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Orders with the given id not found!",
    });
  }

  res.status(200).json({
    success: true,
    order,
  });
};

// View logged in user orders
const myOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
};

// Get all orders for admin
const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "name email");

  let totalAmount = 0;

  orders.forEach((order) => (totalAmount += order.totalPrice));

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
};

// Update order status for admin
const updateOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);

  // console.log(order);
  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Orders with the given id not found!",
    });
  }

  if (order.orderStatus === "Delivered") {
    return res.status(400).json({
      success: true,
      message: "You have already delivered this order!",
    });
  }

  order.orderItems.forEach(async (ord) => {
    await updateStock(ord.product, ord.quantity);
  });

  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "Order has been placed!",
  });
};

// Delete order for admin
const deleteOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Orders with the given id not found!",
    });
  }

  order.deleteOne();

  res.status(200).json({
    success: true,
    message: "Order has been removed!",
  });
};

module.exports = {
  makeNewOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
};
