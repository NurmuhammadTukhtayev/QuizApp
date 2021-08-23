import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

function Sign(){
    const history=useHistory()

    const initialValues={
        username:"",
        password:"",
        email:""
    }

    const validateSchema=Yup.object().shape({
        username:Yup.string().min(3).max(15).required(),
        password:Yup.string().required(),
        email:Yup.string().required().email()
    })

    const onSubmit=(data)=>{
        axios.post("http://localhost:3001/auth/register", data)
            .then(()=>{
                console.log(data)
                history.push('/')
            })
    }



    return (
        <div className="register">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validateSchema}>
                <Form className="formContainer">
                    <label>Username: </label>
                    <ErrorMessage name="username" component="span"/>
                    <Field autocomplate="off" id="inputCreatePost" name="username" placeholder="username *" />

                    <label>Email: </label>
                    <ErrorMessage name="email" component="span"/>
                    <Field autocomplate="off" id="inputCreatePost" name="email" placeholder="email *" />

                    <label>Password: </label>
                    <ErrorMessage name="password" component="span"/>
                    <Field autocomplate="off" id="inputCreatePost" name="password" placeholder="password *" type="password" />

                    <button type="submit">Register</button>
                    <p>Already have account? <Link to="/login">Log in</Link></p>

                </Form>
            </Formik>
        </div>
    )
}

export default Sign