"use client";
import styles from "./projects.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Projects() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Modern Portfolio Website",
      desc: "A clean and fully responsive personal portfolio built using Next.js and custom CSS modules.",
      tech: ["Next.js", "React", "CSS"],
      img: "/project1.jpg",
      live: "#",
      code: "#",
    },
    {
      title: "Business Landing Page",
      desc: "A fast and SEO-optimized business landing page with modern UI and perfect Lighthouse score.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "/project2.jpg",
      live: "#",
      code: "#",
    },
    {
      title: "E-Commerce UI Design",
      desc: "A lightweight and smooth e-commerce interface with clean product layout and responsive design.",
      tech: ["React", "CSS"],
      img: "/project3.jpg",
      live: "#",
      code: "#",
    },
  ];

  return (
    <section className={`${styles.projects} ${show ? styles.show : ""}`} id="projects">
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>

        <div className={styles.grid}>
          {projects.map((p, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={p.img}
                  alt={p.title}
                  width={500}
                  height={300}
                  loading="lazy"
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>

                <div className={styles.techList}>
                  {p.tech.map((t, i) => (
                    <span key={i} className={styles.tech}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.buttons}>
                  <a href={p.live} className={styles.btn} target="_blank">
                    Live Demo
                  </a>
                  <a href={p.code} className={styles.btnOutline} target="_blank">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
