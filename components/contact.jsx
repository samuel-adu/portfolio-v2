/* eslint-disable react/no-unescaped-entities */
import styles from "./contact.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
export default function Contact() {
  return (
    <div id="contact" className="sm:w-2/3 mx-auto">
      <div>
        <h2 className="text-4xl text-center">Get in Touch</h2>
        <p className="text-base text-center">
          I would love to hear about what you’re working on and how I could
          help. Please leave me a message, and I'll get back to you as soon as
          possible.
        </p>

        {/* <div className="my-2 flex items-center gap-4">
          <i className="fa-sharp fa-solid fa-envelope text-2xl"></i>
          <span>theadusamuel@gmail.com</span>
        </div> */}

        {/* <div className="my-2 flex items-center gap-4">
          <i className="fa-sharp fa-solid fa-phone text-2xl"></i>
          <span>+234-803-152-2927</span>
        </div> */}

        {/* <div>
          <ul className="flex gap-4 my-4">
            <li>
              <a
                href="https://www.linkedin.com/in/theadusamuel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/linkedin.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/theadusamuel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/github.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.frontendmentor.io/profile/theadusamuel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/frontend-mentor.svg"
                  // src="/favicon-32x32.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </div> */}
      </div>

      <hr className={`${utilStyles.hr} sm:hidden`} />

      <div>
        {/* <h2 className="text-4xl text-center">Contact Me</h2> */}

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
