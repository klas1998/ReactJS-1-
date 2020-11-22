import React, {Component} from "react";
import {Navbar, Nav, FormControl,Container,Form,Button} from "react-bootstrap";
import logo from "./favicon.ico";

export default class Header extends Component 
{
	render(){
		return(
			<>
			<Navbar fixed="top" CollapseOnSelect expand="md" bg="dark" variant="dark">
			<Container>
			<Navbar.Brand href="/">
			<img
			 src={logo}
			height="30"
			width="30"
			className="d-inline-block aling-top"
			alt="logo"
			/>
			</Navbar.Brand>
			<Navbar.toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="mr-auto">
			<Nav.Link href="/"> Home </Nav.Link>
			<Nav.Link href="/Skill"> Skill </Nav.Link>
			<Nav.Link href="/Contacts">Contacts </Nav.Link>
			<Nav.Link href="/Blog">Blog </Nav.Link>
			</Nav>
			<Form inline>
			<FormControl
			type="text"
			placeholder="Search"
			className="mr-sm-2"
			/>
			<Button variant="outline-info">Search </Button>
			</Form>
			</Navbar.Collapse>
			</Container>
			</Navbar>
			</>
			)
	}
}