import {Component} from "solid-js";
import styles from "../styles/index.module.css"
import heroImg from '../../public/images/deskPic.webp'



const Home:Component<{}> = () => {
  return (
    <main class={styles.mainLayout}>
      <div>

      <figure class={styles.heroCard}>
          <img class={styles.heroImg} src={heroImg} alt="hero image" />
          <figcaption class={styles.heroText}>Welcome to my digital space! Explore my thoughts, creations, and snippets of life, and thank you for visiting – enjoy your stay!</figcaption>
      </figure>

      </div>

      <div class={styles.bioSection}>
        <div class={styles.imgSection}>
            <img src="https://picsum.photos/200"/>
        </div>

        <div>
          <h3>Biography</h3>
          <section>Build and maintain websites, frontend dev also have a mentorship called MOFON. My motto is Beauty and function in equal measure as priority.</section>
        </div>
      

         <div class={styles.socialSection}>
          <h3>Lets Connect</h3>
            <div class={styles.socialLinks}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clip-path="url(#clip0_814_180)">
                  <path d="M20.4004 7.39983C19.387 7.39966 18.414 7.79732 17.6909 8.50725C16.9677 9.21718 16.5522 10.1826 16.5337 11.1958L16.4964 13.2958C16.4942 13.4086 16.4682 13.5196 16.4201 13.6216C16.372 13.7236 16.3028 13.8143 16.2172 13.8877C16.1316 13.9611 16.0314 14.0155 15.9233 14.0475C15.8151 14.0795 15.7015 14.0882 15.5897 14.0732L13.5084 13.7905C10.7697 13.4172 8.14569 12.1558 5.62835 10.0585C4.83102 14.4718 6.38835 17.5292 10.139 19.8878L12.4684 21.3518C12.579 21.4214 12.671 21.517 12.7361 21.6303C12.8013 21.7436 12.8377 21.8712 12.8422 22.0018C12.8467 22.1324 12.8191 22.2622 12.7618 22.3797C12.7045 22.4972 12.6193 22.5989 12.5137 22.6758L10.391 24.2265C11.6537 24.3052 12.8524 24.2492 13.847 24.0518C20.1377 22.7958 24.3204 18.0625 24.3204 10.2545C24.3204 9.61716 22.971 7.39983 20.4004 7.39983ZM13.867 11.1465C13.8903 9.86123 14.2922 8.61139 15.0224 7.55346C15.7527 6.49553 16.7788 5.67652 17.9722 5.19898C19.1657 4.72145 20.4736 4.6066 21.732 4.86882C22.9905 5.13105 24.1436 5.75869 25.047 6.67316C25.995 6.66649 26.8017 6.90649 28.6057 5.81316C28.159 7.99983 27.939 8.94916 26.987 10.2545C26.987 20.4438 20.7244 25.3985 14.3697 26.6665C10.0124 27.5358 3.67635 26.1078 1.86035 24.2118C2.78568 24.1398 6.54569 23.7358 8.71902 22.1452C6.88035 20.9332 -0.438315 16.6265 4.37102 5.04783C6.62835 7.68383 8.91769 9.47849 11.2377 10.4305C12.7817 11.0638 13.1604 11.0505 13.8684 11.1478L13.867 11.1465Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_814_180">
                    <rect width="32" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clip-path="url(#clip0_814_176)">
                  <path d="M16.0003 11.9998C14.9395 11.9998 13.922 12.4213 13.1719 13.1714C12.4218 13.9216 12.0003 14.939 12.0003 15.9998C12.0003 17.0607 12.4218 18.0781 13.1719 18.8283C13.922 19.5784 14.9395 19.9998 16.0003 19.9998C17.0612 19.9998 18.0786 19.5784 18.8288 18.8283C19.5789 18.0781 20.0003 17.0607 20.0003 15.9998C20.0003 14.939 19.5789 13.9216 18.8288 13.1714C18.0786 12.4213 17.0612 11.9998 16.0003 11.9998ZM16.0003 9.33317C17.7684 9.33317 19.4641 10.0355 20.7144 11.2858C21.9646 12.536 22.667 14.2317 22.667 15.9998C22.667 17.7679 21.9646 19.4636 20.7144 20.7139C19.4641 21.9641 17.7684 22.6665 16.0003 22.6665C14.2322 22.6665 12.5365 21.9641 11.2863 20.7139C10.036 19.4636 9.33366 17.7679 9.33366 15.9998C9.33366 14.2317 10.036 12.536 11.2863 11.2858C12.5365 10.0355 14.2322 9.33317 16.0003 9.33317ZM24.667 8.99984C24.667 9.44186 24.4914 9.86579 24.1788 10.1783C23.8663 10.4909 23.4424 10.6665 23.0003 10.6665C22.5583 10.6665 22.1344 10.4909 21.8218 10.1783C21.5093 9.86579 21.3337 9.44186 21.3337 8.99984C21.3337 8.55781 21.5093 8.13389 21.8218 7.82133C22.1344 7.50877 22.5583 7.33317 23.0003 7.33317C23.4424 7.33317 23.8663 7.50877 24.1788 7.82133C24.4914 8.13389 24.667 8.55781 24.667 8.99984ZM16.0003 5.33317C12.7017 5.33317 12.163 5.3425 10.6283 5.4105C9.58299 5.45984 8.88166 5.59984 8.23099 5.85317C7.65233 6.07717 7.23499 6.34517 6.79099 6.7905C6.37367 7.1937 6.0528 7.68595 5.85233 8.2305C5.59899 8.88384 5.45899 9.58384 5.41099 10.6278C5.34166 12.0998 5.33366 12.6145 5.33366 15.9998C5.33366 19.2985 5.34299 19.8372 5.41099 21.3718C5.46033 22.4158 5.60033 23.1185 5.85233 23.7678C6.07899 24.3478 6.34566 24.7652 6.78833 25.2078C7.23766 25.6558 7.65499 25.9238 8.22833 26.1452C8.88699 26.3998 9.58833 26.5412 10.6283 26.5892C12.1003 26.6585 12.615 26.6665 16.0003 26.6665C19.299 26.6665 19.8377 26.6572 21.3723 26.5892C22.415 26.5398 23.1177 26.3998 23.7683 26.1478C24.3457 25.9225 24.7657 25.6545 25.2083 25.2118C25.6577 24.7625 25.9257 24.3452 26.147 23.7718C26.4003 23.1145 26.5417 22.4118 26.5897 21.3718C26.659 19.8998 26.667 19.3852 26.667 15.9998C26.667 12.7012 26.6577 12.1625 26.5897 10.6278C26.5403 9.58517 26.4003 8.88117 26.147 8.2305C25.9461 7.68651 25.6258 7.19445 25.2097 6.7905C24.8066 6.37297 24.3143 6.05206 23.7697 5.85184C23.1163 5.5985 22.415 5.4585 21.3723 5.4105C19.9003 5.34117 19.3857 5.33317 16.0003 5.33317ZM16.0003 2.6665C19.623 2.6665 20.075 2.67984 21.4963 2.7465C22.9163 2.81317 23.883 3.03584 24.7337 3.3665C25.6137 3.70517 26.355 4.16384 27.0963 4.90384C27.7743 5.57037 28.2989 6.37662 28.6337 7.2665C28.963 8.11584 29.187 9.08384 29.2537 10.5038C29.3163 11.9252 29.3337 12.3772 29.3337 15.9998C29.3337 19.6225 29.3203 20.0745 29.2537 21.4958C29.187 22.9158 28.963 23.8825 28.6337 24.7332C28.2999 25.6235 27.7752 26.43 27.0963 27.0958C26.4296 27.7736 25.6234 28.2982 24.7337 28.6332C23.8843 28.9625 22.9163 29.1865 21.4963 29.2532C20.075 29.3158 19.623 29.3332 16.0003 29.3332C12.3777 29.3332 11.9257 29.3198 10.5043 29.2532C9.08433 29.1865 8.11766 28.9625 7.26699 28.6332C6.37676 28.2991 5.57036 27.7744 4.90433 27.0958C4.2262 26.4294 3.70157 25.6231 3.36699 24.7332C3.03633 23.8838 2.81366 22.9158 2.74699 21.4958C2.68433 20.0745 2.66699 19.6225 2.66699 15.9998C2.66699 12.3772 2.68033 11.9252 2.74699 10.5038C2.81366 9.0825 3.03633 8.11717 3.36699 7.2665C3.70064 6.37608 4.2254 5.5696 4.90433 4.90384C5.57055 4.22548 6.3769 3.70081 7.26699 3.3665C8.11766 3.03584 9.08299 2.81317 10.5043 2.7465C11.9257 2.68384 12.3777 2.6665 16.0003 2.6665Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_814_176">
                    <rect width="32" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M22.5 2.5H18.75C17.0924 2.5 15.5027 3.15848 14.3306 4.33058C13.1585 5.50269 12.5 7.0924 12.5 8.75V12.5H8.75V17.5H12.5V27.5H17.5V17.5H21.25L22.5 12.5H17.5V8.75C17.5 8.41848 17.6317 8.10054 17.8661 7.86612C18.1005 7.6317 18.4185 7.5 18.75 7.5H22.5V2.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div> 
      </div>

    </main>
  );

}


export default Home;