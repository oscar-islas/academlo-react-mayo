import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
toast.configure({
    autoClose: 8000,
    draggable: false,
});

const Login = (props) => {
    const [loginForm, setLoginForm] = useState({});

    const handleInput = (event) => {
        setLoginForm({...loginForm, [event.target.name]: event.target.value});
    }

    const loginFn = async(event) => {
        event.preventDefault();
        try{
            const response = await axios.post('https://academlo-todolist.herokuapp.com/login', loginForm);
            toast.success(response.data.message, {
                position: toast.POSITION.TOP_CENTER
            });
            props.cambiarVista("tasks");
        }catch(error){
            console.log(error.response);
            toast.error(error.response.data.message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    // const loginFn = async(event) => {
    //     event.preventDefault();
    //     const response = await fetch('https://academlo-todolist.herokuapp.com/login', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(loginForm)
    //     });
    //     const results = await response.json();
    //     console.log(response, results);
    // }

    return (
        <div>
            <Form onInput={handleInput} onSubmit={loginFn}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <button onClick={() => props.cambiarVista("register")}>Registrate aquí</button>
        </div>
        
    )
}

export default Login;