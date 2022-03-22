const express = require("express");
const router = require("express").Router();
const MenuControllers = require("../controllers/MenuControllers");
const authenticateToken = require("../middleware/Authentication");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/getmenu", authenticateToken, MenuControllers.getMenu);
module.exports = router;
