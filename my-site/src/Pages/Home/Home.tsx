import { Component } from "solid-js";
import './homeStyle.css';
import HeroCard from "../../Components/Cards/heroCard/HeroCard";
import heroImageSrc from "../../assets/images/heroImage.jpg";
import InfoCard from "../../Components/Cards/heroCard/InfoCard";
import instagramPNG from '../../assets/images/IG-icon.png';
import twitterPNG from '../../assets/images/twitter-icon.png';
import linkedinPNG from '../../assets/images/linkedIn-icon.png';


const Home: Component = (props) => {

  return (
    <div class="gridContainer">
      <HeroCard src={heroImageSrc} alt="Hero Image" ></HeroCard>
      <InfoCard>
        <h1>Hi, I'm Nathan Martin</h1>
        <p>
          Welcome to my personal website! I am a passionate Quality Engineer with 7 years of experience using Selenium, Playwright, and Webdriver IO. Additionally, I have served as a skilled Consultant for 2 years, leveraging my expertise in testing to provide valuable insights and solutions. I take pride in delivering top-notch quality assurance and contributing to the success of projects. Let's explore new possibilities together in the world of software quality assurance!
        </p>
        <div class="social-icons">
          <a href="https://twitter.com/NateBMartin"><img src={twitterPNG} alt="Twitter"/></a>
          <a href="https://www.instagram.com/nathan_bradley_martin/"><img src={instagramPNG}alt="Instagram"/></a>
          <a href="https://www.linkedin.com/in/nathan-martin-9a1365b8/"><img src={linkedinPNG} alt="Twitter"/></a>
        </div>
      </InfoCard>

      <HeroCard src={heroImageSrc} alt="About me picture" ></HeroCard>
      <InfoCard>
        <h1>About Me</h1>
        <p>
          I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
        </p>
        <p>
          I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </p>
        <p>
          I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
        </p>
        <p>
          When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
        </p>
        <ul>
          <li>B.E. in Computer Science</li>
          <li>Quality Enginner with 7 years of experience</li>
          <li>Aspiring Amuter Photographer</li>
        </ul>
      </InfoCard>

        
    </div>
  );
};

export default Home;
