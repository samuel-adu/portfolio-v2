/* eslint-disable react/no-unescaped-entities */
import styles from "./contact.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
export default function Contact() {
  return (
    <div id="contact" className="sm:w-1/2 mx-auto">
      <div>
        <h2 className="text-4xl text-center">Get in Touch</h2>
        <p className="text-base text-center">
          Do you have a job opportunity or a project I can be a part of? Feel
          free to reach me at{" "}
          <span className="text-[var(--clr-primary-400)]">
            theadusamuel@gmail.com
          </span>
          , you may also leave me a message using the form below and I'll get
          back to you.
        </p>
      </div>

      <hr className={`${utilStyles.hr} sm:hidden`} />

      <div>
        <form className={`${styles.form}`}>
          <label className={styles.formControl} htmlFor="fullName">
            Name
          </label>
          <input
            className={`${styles.formControl}`}
            type="text"
            name="fullName"
            placeholder="Jane Appleseed"
          />

          <label className={styles.formControl} htmlFor="email">
            Email Address
          </label>
          <input
            className={styles.formControl}
            type="text"
            name="email"
            placeholder="email@example.com"
          />

          <label className={styles.formControl} htmlFor="fullName">
            Message
          </label>
          <textarea
            className={styles.formControl}
            type="text"
            placeholder="How can I help?"
          />

          <button className={`${styles.formControl}`} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
