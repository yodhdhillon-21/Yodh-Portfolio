"use client";
import { useState } from "react";
import styles from "./contact.module.css";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (formData: any) => {
    const e: FormErrors = {};

    if (!formData.name.trim()) e.name = "Name is required.";
    if (!formData.email.trim()) e.email = "Email is required.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      e.email = "Enter a valid email address.";
    if (!formData.message.trim()) e.message = "Message cannot be empty.";

    return e;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToast("");
    setErrors({});
    setLoading(true);

    const target = e.target as HTMLFormElement;

    const formData = {
      name: (target.elements.namedItem("name") as HTMLInputElement).value,
      email: (target.elements.namedItem("email") as HTMLInputElement).value,
      message: (target.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    const res = await fetch("https://formspree.io/f/mzzljdpl", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setToast("Your message has been sent!");
      target.reset();

      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 1200);
    } else {
      setToast("Something went wrong. Try again later.");
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Me</h2>

        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h3>Let's Work Together</h3>
            <p>
              If you want a clean, modern, responsive website, feel free to message me.
            </p>
            <p><strong>Email:</strong> your-email@gmail.com</p>
            <p><strong>Location:</strong> Amritsar, Punjab</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" className={styles.input} />
            {errors.name && <p className={styles.error}>{errors.name}</p>}

            <input type="email" name="email" placeholder="Your Email" className={styles.input} />
            {errors.email && <p className={styles.error}>{errors.email}</p>}

            <textarea
              name="message"
              placeholder="Your Message"
              className={styles.textarea}
            ></textarea>
            {errors.message && <p className={styles.error}>{errors.message}</p>}

            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {toast && <p className={styles.toast}>{toast}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
