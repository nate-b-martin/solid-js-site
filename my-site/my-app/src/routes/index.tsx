import styles from "../styles/index.module.css"
import Hero from '../components/Cards/Hero';

export default function Home() {
  return (
    <main class={styles.heroContent}>
      <Hero></Hero>
    </main>
  );
}
