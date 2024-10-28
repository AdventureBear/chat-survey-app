import {useState} from "react";

// {
//     answer: 'Airline Booking', correct: true
// }

// eslint-disable-next-line react/prop-types
const AnswerButton = ({answer, correct, currentQuestion, setCurrentQuestion, setScore, score}) => {
    const defaultColor = 'blue'
    const correctColor ='green'
    const incorrectColor = 'red'

    const [color, setColor] = useState(defaultColor)

    function handleClick() {
        if (answer===correct) {
            setColor(correctColor)
            setScore(score+1)
        } else {
            setColor(incorrectColor)
        }

        setTimeout(() => {
           setCurrentQuestion(currentQuestion +1);
           setColor(defaultColor)
        }, 1000);
    }

    return (
        <div>
            <button
                style={{
                    backgroundColor: color,
                    margin: '5px',
                    padding: '15px',
                }}
                onClick={() => handleClick()}
                >
                {answer}
            </button>
        </div>
    )
}
export default AnswerButton
