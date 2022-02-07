const { sendUserId, sendFakeData } = require('../controllers/usersController');

const express = require('express');

const router = express.Router();

router.get("/", sendFakeData);
router.get("/:id", sendUserId);

module.exports = {
    userRoutes: router
};