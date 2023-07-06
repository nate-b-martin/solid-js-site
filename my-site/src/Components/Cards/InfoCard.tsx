/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, JSX } from "solid-js";
import "./infoCard.css";

interface InfoCardProps {
  imgSrc?: string;
  children: JSX.Element;
}

const InfoCard: Component<InfoCardProps> = (props) => {
  return (
    <div class="card">
      <section>
        {props.children}
      </section>
      <img class="cardImage" srcSet={props.imgSrc} />
    </div>
  );
};

export default InfoCard;
