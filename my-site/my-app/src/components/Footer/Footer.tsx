import { Component} from "solid-js";
import { A } from "solid-start";
import styles from '../../styles/footer.module.css';

const Footer: Component<{}> = (props) => {
  
  return (
  <div class={styles.footer}>
    <div class={styles.copyright}>
            <p>
                Copyright © {new Date().getFullYear()} MySite - All rights reserved
            </p>
    </div>

    <div class={styles.footerLinkContainer} >
        <ul class={styles.footerLinks}>
            <li >
                <A class={styles.footerLink} href="#linkedin">Linkedin</A>
            </li>
            <li>
                <A class={styles.footerLink} href="#instagram">Instagram</A>
            </li>
            <li>
                <A class={styles.footerLink}href="#twitter">Twitter</A>
            </li>
        </ul>
    </div>
        

  </div>
  );
};

export default Footer;