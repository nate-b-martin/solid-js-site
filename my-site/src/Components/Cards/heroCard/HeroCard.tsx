import './HeroCard.css';

interface cardProps  {
  src: string;
  alt: string;
}
const HeroCard = (props: cardProps) => {

  return (
    <div class="hero-card">
      <div class="hero-card-background"></div>
      <img class="hero-card-image" src={props.src} alt={props.alt} />
    </div>
  );
};

export default HeroCard;
