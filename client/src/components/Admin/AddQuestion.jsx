import React, {useState} from 'react';
import SelectCategory from "../../Helper/SelectCategory";
import Variants from "../../Helper/Variants";
import axios from "axios";

const AddQuestion = () => {
    const [category, setCategory]=useState("")
    const [question, setQuestion]=useState("")
    const [correctAnswer, setCorrectAnswer]=useState("")
    const [variants, setVariants]=useState([])

    const createCat = (newCat) => {
        setCategory(newCat)
    }

    const createVar = (newVar) => {
      setVariants(newVar)
    }

    // const validate=Yup.object().shape({
    //     category:Yup.string().required(),
    //     question:Yup.string().required(),
    //     correctAnswer:Yup.string().required(),
    //     variants:Yup.string().required().minlength(2)
    // })

    const addQuestion = () => {
        axios.post("http://localhost:3001/quiz/addQuestions", {category:category, question:question, correct_ans:correctAnswer, variants:variants}, {
            headers:{
                token:localStorage.getItem('x-auth-token')
            }
        })
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
        setQuestion("")
        setCategory("")
        setCorrectAnswer("")
        setVariants([])
    }

    return (
        <div className="add">
            <h1 style={{textAlign:"center"}}>Add Question</h1>
            <hr/>
            <div className="category">
                <SelectCategory create={createCat}/>
                <div className="question">
                    <h2>Question </h2>
                    <input value={question} type="text" placeholder="question..." onChange={event => setQuestion(event.target.value)}/>
                    <h2>Correct answer</h2>
                    <input value={correctAnswer} type="text" placeholder="answer*" onChange={event => setCorrectAnswer(event.target.value)}/>
                </div>
                <Variants create={createVar}/>
                <button type="text" onClick={addQuestion}>Create </button>
            </div>
        </div>
    );
};

export default AddQuestion;