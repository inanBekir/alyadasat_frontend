import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

export class Signup extends Component {
  state = {
    email: "",
    password: null,
    password_confirmation: null
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

  onRepasswordChange = e => {
    this.setState({
      password_confirmation: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/auth', {
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
      },
      {            
        headers: {
          'Content-Type': 'application/json'
      }
      })
      .then(res => {
        if (res.status === 200) {
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
        <Form.Group controlId="formBasicPassword2">
          <Form.Label>Re-Password</Form.Label>
          <Form.Control type="password" placeholder="Re-Password" onChange={this.onRepasswordChange}/>
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