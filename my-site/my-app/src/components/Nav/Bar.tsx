import { Component } from "solid-js";
import {A} from "solid-start"
import styles from "./bar.module.css"

  
export default function Bar() {
  return (
  <header class={styles.header}>
    <div class={styles.container}>
      <nav>
        <ul>
          <li><A href="/">About</A></li>
          <li><A href="/projects">Projects</A></li>
          <li><A href="/gallery">Gallery</A></li>
        </ul>
      </nav>
    </div>
  </header>
  )
};
