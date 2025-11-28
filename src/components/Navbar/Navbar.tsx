"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Yodh.dev
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span className={`${styles.bar} ${open ? styles.bar1 : ""}`}></span>
          <span className={`${styles.bar} ${open ? styles.bar2 : ""}`}></span>
          <span className={`${styles.bar} ${open ? styles.bar3 : ""}`}></span>
        </button>

        <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
          <ul className={styles.mobileLinks}>
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href="#about" onClick={closeMenu}>About</Link></li>
            <li><Link href="#skills" onClick={closeMenu}>Skills</Link></li>
            <li><Link href="#projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>

        <ul className={styles.desktopLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
