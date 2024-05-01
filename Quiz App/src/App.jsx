import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./Component/Start";
import Timer from "./Component/Timer";
import Trivia from "./Component/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id:4,
      question: " Who was the first president of India ?",
      answers:[
        {
          text:"DR. Rajendra prasad",
          correct:true,
        },
        {
          text:"Sarvepalli RadhaKrishnan",
          correct: false,
        },
        {
          text:"Varahagiri Venkata Giri",
          correct: false,
        },
        {
          text:"Droupadi Murmu",
          correct: false,
        },
      ],
    },
    {
      id:5,
      question: " The office of the Chief election Commission is Located at.....?",
      answers:[
        {
          text:"Delhi",
          correct: true,
        },
        {
          text:"Mumabi",
          correct: false,
        },
        {
          text:"Kolkata",
          correct: false,
        },
        {
          text:"Chennai",
          correct: false,
        },
      ],
    },
    {
      id:6,
      question: "In a UK , the abbrevation NHS stands for National what Services?",
      answers:[
        {
          text: "Humanity",
          correct: false,
        },
        {
          text: "Household",
          correct : false,
        },
        {
          text: "Health",
          correct: true,
        },
        {
          text: "Honor",
          correct: false,
        },
      ],
    },
    {
      id:7,
      question: "Abacus was first .........?",
      answers:[
        {
          text:"Mechanical Calculator",
        correct: true,
      },
      {
        text: "Electronic Calculator",
        correct: false,
      },
      {
        text: "Electronic Computer",
        correct: false,
      },
      {
        text: "Mechanical Computer",
        correct: false,
      },
    ],
    },
    {
      id:8,
      question: " What is the going in Computer is called ?",
      answers:[
        {
          text:"Output",
          correct: false,
        },
        {
          text: "Calculator",
          correct: false,
        },
        {
          text: "Input",
          correct: true,
        },
        {
          text:"Alogrithm",
          correct: false,
        },
      ],
    },
    {
      id:9,
      question: "where in China was the Coronavirus disease 2019 or COVID-19 first Identified?",
      answers:[
        {
          text:"Wuhan",
          correct: true,
        },
        {
          text: "Shenzhou",
          correct: false,
        },
        {
          text: "Beijing",
          correct: false,
        },
        {
          text: "Shanghai",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who  role did Mukesh Khanna play in B R Chopra's TV series MAHABHARATA ?",
      answers: [
       {
        text: "Arujna",
        correct: false,
      },
      {
        text: "Lord  Krishna",
        correct: false,
      },
      {
        text: "Bhishma",
        correct: true,
      },
      {
        text: "Bhima",
        correct: false,
      },
      ],
    },
    {
      id:11,
      question: "Where is India's first Nuclear Center ?",
      answers:[
        {
          text:"Tarapur",
          correct: true,
        },
        {
          text:"Jaipur",
          correct: false,
        },
        {
          text: "Kanpur",
          correct: false,
        },
        {
          text: "Raipur",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: " Name the first deputy Prime Minister of India?",
      answers:[
        { 
          text: "R N Shukla",
          correct: false,
        },
        {
          text: "V R Giri",
          correct: false,
        },
        {
          text: "D B Mahawar",
          correct:  false,
        },
        {
          text: "Sardar Valiabh Bhai patel",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "When Chandrayaan-3 will Land on Moon?",
      answers:[
        {
          text:" 24 August 2024",
          correct: true ,
        },
        {
          text:" 6 Maay 2023",
          correct: false ,
        },
        {
          text:" 14 July 2023",
          correct: false ,
        },
        {
          text:" 15 August 2023",
          correct:  false,
        },
      ],
    },
    {
      id: 14,
      question: " Which was the first mountain peak above 8,000 metres in height to be simmited by humans?",
      answers:[
        {
          text:"Lhotse",
          correct:  false,
        },
        {
          text:"Annapurna",
          correct: true,
        },
        {
          text:"Kanchenjunga",
          correct:  false,
        },
        {
          text:"Makalu",
          correct:  false,
        },
      ],
    },
    {
      id: 15,
      question: " According   to the Padma Purana which King had to live as a tiger for Hundred Years due to a deer's Curse?",
      answers:[
        {
          text:"kshemadhurit",
          correct: false ,
        },
        {
          text:"dharmadatta",
          correct:  false,
        },
        {
          text:"Mitadhvaja",
          correct:  false,
        },
        {
          text:"Prabhanjana",
          correct: true ,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;