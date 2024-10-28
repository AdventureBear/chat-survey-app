import './App.css'
import  {useState} from "react";
import Question from "./Question.jsx";

const surveyQuestions = [
    {
        question: "Which of these involves scheduling and managing flights?",
        answers: ['Airline Booking', 'Door to Door Pollster', 'Internet Routing', 'Social Networks'],
        correctAnswer: 'Airline Booking'
    },
    {
        question: "What is used to direct data across networks?",
        answers: ['Electric Metering', 'Internet Routing', 'Library Indexing', 'Furniture Assembly'],
        correctAnswer: 'Internet Routing'
    },
    {
        question: "Which job involves surveying people about their opinions?",
        answers: ['Chef', 'Door to Door Pollster', 'Bank Teller', 'Architect'],
        correctAnswer: 'Door to Door Pollster'
    },
    {
        question: "Where do people primarily connect and share information online?",
        answers: ['Social Networks', 'Library', 'Television', 'Grocery Store'],
        correctAnswer: 'Social Networks'
    },
    {
        question: "Which of these involves managing check-ins and seats?",
        answers: ['Airline Booking', 'School Admissions', 'Grocery Inventory', 'Event Planning'],
        correctAnswer: 'Airline Booking'
    },
    {
        question: "What system do routers use to direct traffic?",
        answers: ['Traffic Signals', 'Internet Routing', 'Mail Service', 'GPS Mapping'],
        correctAnswer: 'Internet Routing'
    },
    {
        question: "Who might ask you questions on your doorstep?",
        answers: ['Electrician', 'Door to Door Pollster', 'Teacher', 'Delivery Driver'],
        correctAnswer: 'Door to Door Pollster'
    },
    {
        question: "Where do people create profiles and connect online?",
        answers: ['Social Networks', 'Banking Apps', 'Search Engines', 'Job Boards'],
        correctAnswer: 'Social Networks'
    },
    {
        question: "Which option allows you to reserve seats on a plane?",
        answers: ['Airline Booking', 'Restaurant Reservation', 'Library Checkout', 'Car Rental'],
        correctAnswer: 'Airline Booking'
    },
    {
        question: "What type of network helps people to find friends and communities?",
        answers: ['Social Networks', 'Private Intranet', 'ISP Provider', 'Public Park'],
        correctAnswer: 'Social Networks'
    }
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)

    return (
        //10 times
        <>

        {currentQuestion<10 &&
            <>
                <p>Current Question: {currentQuestion+1}</p>
                <Question
                   score={score}
                    setScore={setScore}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    surveyQuestion={surveyQuestions[currentQuestion]}
                />
            </>
        }
            <h3>Score: {score}</h3>

            {currentQuestion===10 &&
                <p>Final Score: {score/10*100}%</p>
            }







        </>

    )

}

export default App
