import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";


import signUpRoutes from "./routes/signUp.js";
import attemptQuizRoutes from "./routes/attemptQuiz.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5000"],
  methods: ["POST", "PUT", "GET", "DELETE", "SHOW"],
  credentials: [true],
}));

app.use("/auth", signUpRoutes);
app.use("/attempt", attemptQuizRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
