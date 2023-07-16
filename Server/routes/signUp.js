import express from "express";
import { createUser, logInUser } from "../controllers/signUp.controller.js";
//const {createUser, logInUser} = require('../controllers/signUp.controller.js');
const router = express.Router();

router.post("/signUp", createUser);
router.post("/login", logInUser);

export default router;