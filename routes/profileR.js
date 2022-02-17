const express = require("express");
const { profile, profileImage } = require("../controllers/profileBE");
const profileRouter = express.Router();
//main route is /profile
profileRouter.get("/:userId", profile);
profileRouter.put("/:userId", profileImage);
module.exports = profileRouter;
