import {A} from "solid-start"
import {Divider} from "@suid/material"
import styles from "./bar.module.css"

  
export default function Bar() {
  return (
  <header class={styles.header}>
    <div class={styles.container}>
      <nav>
        <div class="logo">
          <h3>Nathan Martin</h3>
        </div>
        <ul>
          <li><A href="/">About</A></li>
          <li><A href="/projects">Projects</A></li>
          <li><A href="/gallery">Gallery</A></li>
        </ul>
      </nav>
    <Divider class={styles.divider}/>
    </div>
  </header>
  )
};
