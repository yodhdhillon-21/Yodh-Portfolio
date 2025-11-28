"use client";
import { useEffect, useState } from "react";
import styles from "./hero.module.css";

export default function Hero() {  

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hey, I'm <span className={styles.highlight}>Yodh</span>
        </h1>

        <p className={styles.subtitle}>
          I design and build clean, modern and fully responsive websites using
          HTML, CSS, React and Next.js.
        </p>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.primaryBtn}>View Work</a>
          <a href="#contact" className={styles.secondaryBtn}>Hire Me</a>
        </div>
      </div>
    </section>
  );
}
