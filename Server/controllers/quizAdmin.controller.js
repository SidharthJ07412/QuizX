import client from "../db.js";
export const createQuiz = async (req, res) => {
  const { user_id, question_count, name, duration } = req.body;
  console.log(user_id);
  console.log(question_count);
  console.log(name);
  console.log(duration);
  let exists;
  try {
    await client.query(
      "INSERT INTO Quiz(Creater_id,Name,questions_count,duration) VALUES($1,$2,$3,$4);",
      [user_id, name, question_count, duration]
    );
  } catch (err) {
    console.log(err);
  }

  try {
    exists = await client.query("select max(Quiz_id) from Quiz");
  } catch (err) {
    console.log(err);
  }

  console.log(exists.rows[0]);
  res.status(200).send(exists.rows[0]);
};

export const addQuestion = async (req, res) => {
  const {
    quiz_id,
    question,
    option_1,
    option_2,
    option_3,
    option_4,
    correct_answer,
  } = req.body;
  let exists;
  try {
    exists = await client.query(
      "INSERT INTO Questions(Quiz_id,Ques_text,Option_1,Option_2,Option_3,Option_4,Correct_Option) VALUES($1,$2,$3,$4,$5,$6,$7);",
      [
        quiz_id,
        question,
        option_1,
        option_2,
        option_3,
        option_4,
        correct_answer,
      ]
    );
  } catch (err) {
    console.log(err);
  }
  res.status(200).send("question added sucessfully");
};

export const viewQuestions = async (req, res) => {
  const { quiz_id } = req.body;
  let exists;
  try {
    exists = await client.query("select * from questions where Quiz_id=$1", [
      quiz_id,
    ]);
  } catch (err) {
    console.log(err);
  }
  console.log(exists.rows);
  res.status(200).send(exists.rows);
};

export const viewQuizzes = async (req, res) => {
  const { user_id } = req.body;
  let exists;
  try {
    exists = await client.query("select * from quiz where Creater_id=$1", [
      user_id,
    ]);
  } catch (err) {
    console.log(err);
  }
  console.log(exists.rows);
  res.status(200).send(exists.rows);
};

export const deleteQuiz = async (req, res) => {
  const { user_id, quiz_id } = req.body;
  let exists;

  try {
    exists = await client.query(
      "select * from Quiz where Quiz_id=$1 and Creater_id=$2",
      [quiz_id, user_id]
    );
  } catch (err) {
    console.log(err);
  }

  if (exists.rowCount === 0) res.status(500).send("Cannot delete Quiz");
  else {
    try {
      await client.query("delete from Marks where Quiz_id=$1", [quiz_id]);
      await client.query("delete from Questions where Quiz_id=$1", [quiz_id]);
      await client.query("delete from Quiz where Quiz_id=$1", [quiz_id]);
    } catch (err) {
      console.log(err);
    }
    res.status(200).send("Deleted");
  }
};
