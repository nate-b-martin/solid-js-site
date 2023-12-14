import { Nav, Container, Navbar } from "solid-bootstrap";
import {Divider} from "@suid/material";
import { Component } from "solid-js";
import style from './bar.module.css';


const Bar: Component<{}> = () => {
  return (
  <>
    <Navbar variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Solid-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" class={style['navbar-collapse']}>
          <Nav class="navbar-nav">
            <Nav.Link class={style['nav-link']} href="/">Home</Nav.Link>
            <Nav.Link class={style['nav-link']} href="/projects">Projects</Nav.Link>
            <Nav.Link class={style['nav-link']} href="/gallery">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Divider sx={{margin: "40px"}}></Divider>
  </>

  )
};

export default Bar;