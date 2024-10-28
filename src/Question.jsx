import React from 'react'
import AnswerButton from "./AnswerButton.jsx";

// eslint-disable-next-line react/prop-types
const Question = ({surveyQuestion, currentQuestion, setCurrentQuestion, setScore, score}) => {
    console.log("Child: ", surveyQuestion)
    return (
        <div>
            <h2>{surveyQuestion['question']} </h2>
            {surveyQuestion['answers'].map((answer, i) =>
                <AnswerButton
                    key={i}
                    answer={answer}
                   score={score}
                    setScore={setScore}
                    correct={surveyQuestion['correctAnswer']}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                />
            )}
        </div>
    )
}
export default Question
