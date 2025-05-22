const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller.js");
const authMiddleware = require("../utils/auth.middleware.js");

router.post("/", usersController.registerUser);
router.get("/", authMiddleware.authenticateToken, usersController.getUsers);
router.post("/login", usersController.loginUser);

module.exports = router;
