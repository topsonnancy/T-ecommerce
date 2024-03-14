const express = require('express')
const router = express.Router()
const orderController = require("../controllers/orderController")
const { verifyAndAuthenticate, verifyAdminOnly } = require('../middlewares/verify')

router.route("/:id")
 .put(verifyAndAuthenticate, orderController.updateOrder)
 .delete(verifyAndAuthenticate, orderController.deleteOrder)
 .get(verifyAndAuthenticate, orderController.getOrder)

router.route("/")
 .post(orderController.createOrder)
 .get(verifyAndAuthenticate, orderController.getOrders)

module.exports = router