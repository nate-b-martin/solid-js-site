import { Component, For, JSX } from "solid-js";
import { Card } from "solid-bootstrap";
import styles from "./Hero.module.css";

type HeroProps = {
	children?: JSX.Element;
	class?: CSSModuleClasses[string];
};

const Hero: Component<HeroProps> = (props: HeroProps) => {
	const fullStyle: string = `${styles.card} ${props.class}`;

	return (
		<Card class={fullStyle}>
			<Card.Body>{props.children}</Card.Body>
		</Card>
	);
};

export default Hero;
