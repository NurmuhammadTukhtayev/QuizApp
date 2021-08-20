import React from 'react';
import {Form, Button, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function Sign(){
    return (
        <div className="form">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="username" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have account? <Link className="link" to="/login">Sign In</Link></p>
            </Form>
        </div>






        // <section>
        //     <div className="register">
        //         <div className="user-signingBx">
        //             <div className="imgBox"><img src="https://i.pinimg.com/originals/d9/9a/01/d99a013f89801943cb6a557e3f6c191f.gif"/> </div>
        //             <div className="formBx">
        //                 <form>
        //                     <h2>Sign In</h2>
        //                     <input type="text" placeholder="username or email"/>
        //                     <input type="password" placeholder="password"/>
        //                     <input type="submit" value="Login"/>
        //                     <p className="signUp">Don't have an account? <a href="#">Sign up</a></p>
        //                 </form>
        //             </div>
        //         </div>
        //
        //     </div>
        // </section>

        );
}

export default Sign;