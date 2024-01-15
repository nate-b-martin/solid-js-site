import { Component, JSX } from "solid-js";
import collabImg from '../images/collab.jpeg';
import deskImg from '../images/desk-ai.jpeg'
import styles from '../../styles/experienceCard.module.css';

type ExperienceCardProps = {
    title: string,
    imgPath: string,
    children?: JSX.Element
    reverse?: boolean
}

const ExperienceCard: Component<ExperienceCardProps> = (props: ExperienceCardProps) => {

    return (
        <div class={styles.experienceCard}>

            <div class={`${styles.experienceItem} ${props.reverse ? styles.reverse : ''}`}>
                <img src={props.imgPath} alt="Experience Image" />
            </div>

            <div class={styles.experienceItem}>
                <h2 class={styles.experienceTitle}>{props.title}</h2>
                {props.children}
            </div>

        </div>
    );
};


export default ExperienceCard;