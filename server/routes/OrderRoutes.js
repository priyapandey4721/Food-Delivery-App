const express = require("express");
const orderControllers = require("../controllers/OrderControllers");
const router = express.Router();

router.post("/placeorders", orderControllers.placeOrder);
router.get("/getorders/:email", orderControllers.getOrders);

module.exports = router;
