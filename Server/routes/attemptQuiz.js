import express from "express";
import { startQuiz,seeLeaderboard,endQuiz } from "../controllers/attemptQuiz.controller.js";

const router = express.Router();

router.post("/startQuiz", startQuiz);
router.post("/seeLeaderboard", seeLeaderboard);
router.post("/endQuiz", endQuiz);

export default router;