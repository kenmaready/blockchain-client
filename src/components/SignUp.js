import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { registerUser } from "../actions.js";


export class NewUser extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
            error: "",
            loading: false
        };
    };
    
    handleChange = (e) => {
        this.setState({ error: ""});
        console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const { name, password } = this.state;
        registerUser(name, password)
            .then(({ data }) => {
                console.log(data);
                if (data.error) {
                    this.setState({ error: data.error, loading: false });
                } else {
                    this.setState({ NavigateToReferrer: true, error: "" });
                }
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    error: err.response.data.error,
                    loading: false,
                });
            });
    };

    signupForm = (name, password) => {
        return (
            <Form>
                <Form.Group className='mb-3' controlId='formBasicUsername'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="username" onChange={this.handleChange} value={name} name="name"/>
                    <Form.Text className="text-muted">
                        Pick a unique username.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" onChange={this.handleChange} value="password" name="password" />
                    <Form.Text className="text-muted">
                        Pick a secure password.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }

    render() {
        const { name, password, error, redirectToReferrer, loading } = this.state;

        if (redirectToReferrer) {
            return <Navigate to="/" />;
        }


        return (
            <div>
                <Container>
                <h3>Register a new User</h3>
                    {this.signupForm(name, password)}
                </Container>
            </div>
        )
    }
}

export default NewUser;