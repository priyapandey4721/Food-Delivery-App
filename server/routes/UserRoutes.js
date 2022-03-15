const express = require("express");
const router = require("express").Router();
const UserControllers = require("../controllers/UserControllers");
const UserValidation = require("../middleware/Validation");
const authenticateToken = require("../middleware/Authentication");
const path = require("path");
const multer = require("multer");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(express.static(path.join(__dirname, "./src/")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      "E:/Campus to Corporate/Tutorial/Food Delivery App/client/src/media"
    );
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
let upload = multer({
  storage: storage,
}).single("profile");
router.post(
  "/register",
  upload,
  UserValidation.validRegister,
  UserControllers.register
);
router.post(
  "/login",
  UserValidation.validLogin,
  UserControllers.login
)

module.exports = router;
