import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/Header.scss'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

var isLoggedIn;
export class  Header extends Component {
    handleLogoutClick() {
        isLoggedIn = localStorage.removeItem('userToken');
    }
    render() {
        isLoggedIn = localStorage.getItem('userToken');
        let signIn, signUp;
    
        if (isLoggedIn != null) {
            signIn = <NavLink to="/" onClick={this.handleLogoutClick}>Logout</NavLink>
        } else {
            signIn = <NavLink to="/signin"  activeStyle={{color: 'red'}}>Signin</NavLink>
            signUp = <NavLink to="/signup"  activeStyle={{color: 'red'}}>Signup</NavLink>
        }
    
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
            {signIn}
            {signUp}
        </Navbar.Collapse>
        </Navbar>
    );
}
}