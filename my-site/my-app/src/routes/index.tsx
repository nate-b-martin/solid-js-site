import {Component} from "solid-js";
import styles from "../styles/index.module.css";
import ExperienceCard from "../components/Cards/ExperienceCard";
import heroImg from '../images/nateOllie.webp';
import collabImg from '../images/collab.jpeg';
import deskImg from '../images/desk-ai.jpeg'
import Footer from "~/components/Footer/Footer";



const Home:Component<{}> = () => {
  return (
    <div class={styles.container}>
      <div class={styles.heroContainer}>
        <div class={styles.heroText}>
          <h1>Welcome.</h1>
        </div>

        <div class={styles.heroImgContainer}>
          <img src={heroImg} alt="Hero Image" />
        </div>

        <div class={styles.heroDescription}>
          <p>
            Hello and welcome to my personal website. Here, you'll find a comprehensive overview of my professional journey and skills through my resume. Feel free to explore and learn more about my experiences and qualifications.
          </p>
        </div>
      </div>

      <ExperienceCard
        imgPath={collabImg}
        title="Consultant"
      >
          <p>
            During my two-year tenure at Slalom, I've excelled as a consultant by delivering strategic insights and fostering collaborative relationships. My experience has honed my consulting skills and reinforced my commitment to driving positive change through client-focused solutions.
          </p>
      </ExperienceCard>

      <ExperienceCard
        imgPath={deskImg}
        title="Quality Engineer"
        reverse={true}
      >
          <p>
            With six years dedicated to Quality Assurance Engineering, I specialize in meticulous UI testing using JavaScript. My expertise includes a proven track record of ensuring high-quality software by leveraging technical proficiency and a keen eye for detail in testing methodologies.
          </p>
      </ExperienceCard>


      <Footer/>
    </div>
  );

}


export default Home;