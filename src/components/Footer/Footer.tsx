import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Yodhvir Singh. All Rights Reserved.
        </p>

        <div className={styles.socials}>
          <a href="#" target="_blank" className={styles.link}>
            GitHub
          </a>
          <a href="#" target="_blank" className={styles.link}>
            LinkedIn
          </a>
          <a href="#" target="_blank" className={styles.link}>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
