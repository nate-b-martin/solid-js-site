import { Component, For } from "solid-js";
import workLateImage from'../../assets/images/work-late.jpg';
import aboutMyself from'../../assets/images/hero-photo.jpg';
import latestProjects from'../../assets/images/desktop.jpg';
import galleryPhoto from'../../assets/images/camera-front.jpg';
import HeroCard from "../../Components/Cards/heroCard/HeroCard";
import ImageCard from "../../Components/Cards/ImageCard/ImageCard";
import './homeLayout.css';


const Home: Component = (props) => {

  const heroImage = { imageSrc:workLateImage, cardText: "Magic is something you create."};
  const images = [
    {imageSrc:aboutMyself, cardText: "About Myself.", urlLink: "/about"},
    {imageSrc:latestProjects, cardText: "Latest Projects.", urlLink: "/projects"},
    {imageSrc:galleryPhoto, cardText: "Gallery.", urlLink: "/gallery"},
  ]
  return (
    <div class="container">
      <HeroCard title="Magic is something you create." imageSrc={heroImage.imageSrc} cardText={heroImage.cardText}/>
      <For each={images}>{(image) => 
        <ImageCard title={image.cardText} imageSrc={image.imageSrc} cardText={image.cardText}/>}
      </For>
    </div>
  );
};

export default Home;
