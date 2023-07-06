/* eslint-disable import/no-extraneous-dependencies */
import { Component, createSignal } from "solid-js";
import NavDrawer from "./NavDrawer";
import "./navbar.css";
import "./navDrawer.css";

const [isDrawerOpen, setIsDrawerOpen] = createSignal(false);
const NavBar: Component = (props) => {
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen());
    };

  return (
    //create navbar with links home, about, projects, contact
    <div class="navbar">
      <div class="logo">
        <p>Nathan<span>Martin</span></p>
      </div>
      <NavDrawer/>
    </div>
  );
};

export default NavBar;
