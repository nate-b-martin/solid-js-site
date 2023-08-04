import { Component, createSignal, JSX } from "solid-js";
import './Infocard.css';

interface InfoCardProps {
  socialMediaLinks?: string[];
  children: JSX.Element;
}

const InfoCard: Component<InfoCardProps> = (props) => {
  return (
    <div class="info-card">
      <div class="card-content">
        {props.children}
      </div>
      <div class="social-media-links">
        {props.socialMediaLinks?.map((link) => (
          <a href={link}>
            <i class={`fab fa-${getSocialMediaIcon(link)}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

function getSocialMediaIcon(link: string): string {
  if (link.includes("twitter")) {
    return "twitter";
  } else if (link.includes("linkedin")) {
    return "linkedin";
  } else if (link.includes("facebook")) {
    return "facebook";
  } else {
    return "external-link-alt";
  }
}

export default InfoCard;
