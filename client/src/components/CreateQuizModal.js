import React from "react";
import axios from "axios";
import { useState } from "react";
import "../componentsStyles/create_quiz_modal.css";
const iid = "yoyoyott";

export default function CreateQuizModal(props) {
  const { user_id, update_upvar } = props;

  const [QuizDetail, SetQuizDetail] = useState({
    name: "",
    question_count: 0,
    duration: 0,
  });

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    SetQuizDetail((QuizDetail) => ({ ...QuizDetail, [name]: value }));
  };

  const handleclick = async () => {
    try {
      axios
        .post("http://localhost:5000/quizAdmin/createquiz", {
          user_id: user_id,
          question_count: QuizDetail.question_count,
          name: QuizDetail.name,
          duration: QuizDetail.duration,
        })
        .catch((err) => {
          alert("Unable to Create Quiz");
        });
    } catch (err) {
      console.log(err);
    }

    update_upvar((prevState) => {
      return { count: prevState.count + 1 };
    });
    SetQuizDetail({
      name: "",
      question_count: 0,
      duration: 0,
    });
    // console.log("update");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success btn-lg btn-block p-3"
        data-toggle="modal"
        data-target={`#id${iid}`}
      >
        CreateQuiz
      </button>

      <div class="modal" id={`id${iid}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Enter Quiz Details</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body ">
              <input
                type="text"
                className="form-control text-center"
                placeholder="Quiz Name"
                name="name"
                value={QuizDetail.name}
                onChange={handlechange}
              />
              <input
                type="number"
                className="form-control text-center"
                placeholder="Number of Questions"
                name="question_count"
                value={QuizDetail.question_count}
                onChange={handlechange}
              />
              <input
                type="number"
                className="form-control text-center"
                placeholder="Duration of Quiz(in minutes)"
                name="duration"
                value={QuizDetail.duration}
                onChange={handlechange}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                onClick={handleclick}
                data-dismiss="modal"
              >
                Create
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
