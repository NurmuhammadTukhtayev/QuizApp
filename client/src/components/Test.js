import React, {useEffect, useState} from 'react';
import axios from "axios";

const Test = () => {
    const [question, setQuestion]=useState()

    useEffect(()=>{
        axios.get("http://localhost:3001/quiz/1/start/Nurmuhammad/:tests", {
            headers:{
                token:localStorage.getItem("x-auth-token")
            }
        }).then(response=>{
            setQuestion(response.data)
        })

    }, [])

    //TODO in base no questions, must create questions and variants + category
    console.log(question)


    const questions=[
        {
            id:1,
            question:"What is the capital of France?",
            answerOptions:[
                {answerText:"New York", isCorrect:false},
                {answerText:"Paris", isCorrect:true},
                {answerText:"Dublin", isCorrect:false}
            ]
        },
        {
            id:2,
            question:"What is the capital of USA?",
            answerOptions:[
                {answerText:"New York", isCorrect:true},
                {answerText:"Paris", isCorrect:false},
                {answerText:"Dublin", isCorrect:false}
            ]
        },
        {
            id:3,
            question:"What is the capital of Uzbekistan?",
            answerOptions:[
                {answerText:"Tashkent", isCorrect:true},
                {answerText:"Paris", isCorrect:false},
                {answerText:"Dublin", isCorrect:false}
            ]
        }
    ]

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Test Category</h1>
            <div className="test-start">
                {questions.map((question)=>
                    <div>
                        <h3>{question.id}.{question.question}</h3>
                        {question.answerOptions.map((answer)=>
                            <div>
                                <button className="variants">{answer.answerText}</button>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Test;