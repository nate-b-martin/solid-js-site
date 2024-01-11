import {Component} from "solid-js";
import styles from "../styles/index.module.css";
import heroImg from '../../public/images/nateOllie.webp';



const Home:Component<{}> = () => {
  return (
    <div class={styles.container}>
      <div class={styles.heroContainer}>
{/* TODO: Style hero component */}
        <h1 class={styles.heroText}>Welcome.</h1>

        <div class={styles.heroImgContainer}>
          <img src={heroImg} alt="Hero Image" />
        </div>

        <div class={styles.heroText}>
          <p>Hello and welcome to my personal website. Here, you'll find a comprehensive overview of my professional journey and skills through my resume. Feel free to explore and learn more about my experiences and qualifications.</p>
        </div>

      </div>

    </div>
  );

}


export default Home;