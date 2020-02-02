import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/Header.scss'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

export function Header(){
    const userToken = localStorage.getItem('token');
    const [token] = useState(userToken);

    function logout(){
        localStorage.removeItem('token');
        window.location.reload(false);
    }
    
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">ALyadaSat</Navbar.Brand>
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
            <NavLink className="btn btn-info" to="/create">Ürün Sat</NavLink> 
            {
                token !== null ? 
                <React.Fragment>
                <NavLink className="btn btn-danger" to="/" onClick={() => logout()}>Çıkış Yap</NavLink>  
                </React.Fragment> :
                <React.Fragment>
                    <NavLink to="/signin" className="btn btn-warning"  activeStyle={{color: 'red'}}>Giriş yap</NavLink>
                    <NavLink to="/signup" className="btn btn-primary" activeStyle={{color: 'red'}}>Kayıt Ol</NavLink>
                </React.Fragment>
            }
        </Navbar.Collapse>
        </Navbar>
    );
}