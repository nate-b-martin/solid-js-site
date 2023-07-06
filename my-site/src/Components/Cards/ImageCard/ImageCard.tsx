import { Component, createSignal } from "solid-js";
import './imageCard.css';

interface Props {
    title: string;
    imageSrc: string;
    cardText: string;
    urlLink?: string;
}
const ImageCard: Component<Props> = (props) => {
  const [getWindowWidth, setWindowWidth] = createSignal(window.innerWidth);

  // const getImageStyle = () => {
  //   if (getWindowWidth() < 768) {
  //     console.log(getWindowWidth());
  //     return {width: "100%"};
  //   } else {
  //     console.log(getWindowWidth());
  //     return {width: "80%", border: "2px solid white", margin: "0 auto"};
  //   }
  // }

  const handleClick = () => {
    // go to the urlLink if it exists
    if (props.urlLink) {
      window.open(props.urlLink);
    }
  }
  
  return (
    // create a card with image and title
    <div class="imageCard gridItem " onClick={handleClick}>
      <p class="imageText"> {props.cardText} </p>
      <img class="image" src={props.imageSrc} alt="tile image" />
    </div>

  );
};

export default ImageCard;