import { Component, createSignal } from "solid-js";
import "./navDrawer.css";

const [isDrawerOpen, setIsDrawerOpen] = createSignal(false);

const NavDrawer: Component = (props) => {
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen());
    };

    return (
        // <div class="navDrawer">
        <>
            {/* Render hamburger button */}
            <div class="hamburger" onClick={toggleDrawer} classList={{ "open": isDrawerOpen() }}>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            {/* Render drawer with navigation links */}
            <div class="drawer" classList={{ 'open': isDrawerOpen() }}>
                <nav>
                    <ul class="drawerList">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li>Switch Theme</li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default NavDrawer;