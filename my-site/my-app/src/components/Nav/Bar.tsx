import { Component } from "solid-js";
import {A} from "solid-start";
import NavDrawer from "./NavDrawer";
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from "solid-bootstrap";
import style from "../../styles/bar.module.css";

const Bar: Component<{}> = () => {
	return (
		<Navbar variant="light" expand={false}>
			<Container fluid>
				<Navbar.Brand href="/">Nathan Martin</Navbar.Brand>
				<Nav class={`me-auto ${style.navLinkGroup}`}>
					<Nav.Link href="/"><A class={style.navLink} href="/">Home</A></Nav.Link>
					<Nav.Link href="/resume"><A class={style.navLink} href="/resume">Resume</A></Nav.Link>
					<Nav.Link href="/gallery"><A class={style.navLink} href="/gallery">Gallery</A></Nav.Link>
				</Nav>

				<Navbar.Toggle class={style.drawerToggle} aria-controls="offcanvasNavbar" />
				<Navbar.Offcanvas
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
					placement="top"
				>
					<Offcanvas.Header closeButton>
						{/* <Offcanvas.Title id="offcanvasNavbarLabel">Where do you want to go?</Offcanvas.Title> */}
					</Offcanvas.Header>

					<Offcanvas.Body style={{"background-color": "#efeaea3d"}}>
						<Nav class="justify-content-end flex-grow-1 pe-3">
							<Nav.Link href="/"><A class={style.drawerLink} href="/">Home</A></Nav.Link>
							<Nav.Link href="/resume"><A href="/resume" class={style.drawerLink}>Resume</A></Nav.Link>
							<Nav.Link href="/gallery"><A class={style.drawerLink} href="/gallery">Gallery</A></Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default Bar;
