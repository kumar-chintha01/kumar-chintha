import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              "As a front-end developer, I have gained hands-on experience in building and deploying dynamic, responsive web applications. My expertise lies in developing portfolio websites and a music app website using technologies such as HTML, CSS, JavaScript, and React.js. I am passionate about creating intuitive user interfaces that provide seamless user experiences."
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              "In addition to my front-end skills, I have hands-on experience in back-end development, where I have worked on building scalable and efficient web applications. My expertise includes working with technologies like Node.js, Express.js, and MongoDB, with a strong focus on handling JSON requests and responses, and implementing robust APIs."
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems in Hackathons.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
