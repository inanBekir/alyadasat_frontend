import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

export class Signin extends Component {
  state = {
    email: "",
    password: null
  };

  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/auth_user', {
          email: this.state.email,
          password: this.state.password
      },
      {            
        headers: {
          'Content-Type': 'application/json'
      }
      })
      .then(res => {
        if (res.status === 200) {
          console.log("uvv")
          this.props.history.push("/");
      }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={this.onEmailChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
    );
  }
}