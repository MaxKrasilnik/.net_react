import React, {Component} from "react";
import {NavLink} from "react-bootstrap";
import {Navbar, Nav} from "react-bootstrap";

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle area-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="d-inline p-2 bg-dark text-white" href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link className="d-inline p-2 bg-dark text-white" href="department">
                            Department
                        </Nav.Link>
                        <Nav.Link className="d-inline p-2 bg-dark text-white" href="employee">
                            Employee
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}