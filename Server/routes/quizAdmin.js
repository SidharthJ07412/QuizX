import express from "express";
import {
  createQuiz,
  addQuestion,
  viewQuestions,
  viewQuizzes,
  deleteQuiz,
} from "../controllers/quizAdmin.controller.js";

const router = express.Router();

router.post("/createquiz", createQuiz);
router.post("/addquestion", addQuestion);
router.post("/viewquestions", viewQuestions); // testing purpose
router.post("/viewquizzes", viewQuizzes);
router.post("/deletequiz", deleteQuiz);

export default router;
