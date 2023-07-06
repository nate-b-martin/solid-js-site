import { Component } from "solid-js";
import './heroCard.css'

interface Props {
    title: string;
    imageSrc: string;
    cardText: string;
}
const HeroCard: Component<Props> = (props) => {
  
  return (
    // create a card with image and title
    <div class="heroCard gridItem">
      <p class="heroText">{props.cardText}</p>
      <img class="heroImage" src={props.imageSrc} alt="tile image"/>
    </div>

  );
};

export default HeroCard;