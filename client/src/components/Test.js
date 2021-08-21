import React from 'react';

const Test = () => {
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