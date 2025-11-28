"use client";
import Image from "next/image";
import styles from "./about.module.css";
import { useEffect, useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`${styles.about} ${show ? styles.show : ""}`} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>

        <div className={styles.wrapper}>
          {/* LEFT SIDE WITH IMAGE AND CARD */}
          <div className={styles.left}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/Profile/profile.png"
                  alt="Yodhvir Singh"
                  width={250}
                  height={250}
                  className={styles.profileImage}
                />
              </div>

              <h3 className={styles.name}>Yodhvir Singh</h3>
              <p className={styles.role}>Web Designer & Frontend Developer</p>
              <p className={styles.location}>Amritsar, Punjab, India</p>

              <div className={styles.signature}>Yodh</div>
            </div>

            {/* STATS */}
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.statBox}>
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className={styles.statBox}>
                <h3>4+</h3>
                <p>Core Skills</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE TEXT + TIMELINE */}
          <div className={styles.right}>
            <p className={styles.text}>
              I'm a self-taught web designer with over 2 years of experience
              building clean, modern and responsive websites. I specialize in
              HTML, CSS, React and Next.js, focusing on clarity, performance and
              long-term usability.
            </p>

            <p className={styles.text}>
              My journey started after completing my 12th and ITI Computer
              Diploma. Everything afterward, from design sense to coding
              practice, I built myself through online learning, consistency, and
              passion.
            </p>

            <p className={styles.text}>
              I’m also learning Indian stock market trading, but creating
              digital experiences is still the part of the day I enjoy most.
            </p>

            {/* TIMELINE */}
            <div className={styles.timeline}>
              <div className={styles.line}></div>

              <div className={styles.item}>
                <div className={styles.circle}></div>
                <p className={styles.year}>2021</p>
                <p className={styles.desc}>Completed 12th & ITI Diploma</p>
              </div>

              <div className={styles.item}>
                <div className={styles.circle}></div>
                <p className={styles.year}>2022</p>
                <p className={styles.desc}>Started learning Web Design online</p>
              </div>

              <div className={styles.item}>
                <div className={styles.circle}></div>
                <p className={styles.year}>2023</p>
                <p className={styles.desc}>Built first projects, improved skills</p>
              </div>

              <div className={styles.item}>
                <div className={styles.circle}></div>
                <p className={styles.year}>2024</p>
                <p className={styles.desc}>Started professional portfolio journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
