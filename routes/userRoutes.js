const express = require("express");
const {
  getAllUsers,
  registerControllers,
  loginControllers,
} = require("../controllers/userControllers");

//router object
const router = express.Router();

//GET ALL USER || GET
router.get("/all-users", getAllUsers);

//CREATE USER || POST
router.post("/register", registerControllers);

//LOGIN USER || POST
router.post("/login", loginControllers);

module.exports = router;
