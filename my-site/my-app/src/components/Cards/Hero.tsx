import { Component } from "solid-js";
import {Paper} from "@suid/material";
import styles from "./Hero.module.css";

const Hero: Component<{}> = (props) => {
    return (
        <div class={styles.container}>
            <Paper sx={{backgroundColor: "aliceblue", color: "red"}}>
                <h1 class={styles.title}>
                    Welcome to my digital space! Explore my thoughts, creations, and snippets of life, and thank you for visiting – enjoy your stay!
                </h1>
            </Paper>
        </div>
    )
};

export default Hero;