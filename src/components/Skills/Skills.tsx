"use client";
import styles from "./skills.module.css";
import { useEffect, useState } from "react";

export default function Skills() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "HTML", icon: "💻" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "🚀" },
    { name: "Responsive Design", icon: "📱" },
  ];

  return (
    <section className={`${styles.skills} ${show ? styles.show : ""}`} id="skills">
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills</h2>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{skill.icon}</div>
              <p className={styles.name}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
