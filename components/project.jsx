import Image from "next/image";
import styles from "./portfolio.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Project(props) {
  return (
    <div className={styles.card}>
      <div className="relative w-full h-72">
        <Image
          src={`/images/${props.project.img}`}
          alt="project preview"
          fill
          // width={311}
          // height={288}
          className={styles.cardImg}
        />
      </div>

      <div className={styles.cardText}>
        <h3 className="text-3xl capitalize">{props.project.title}</h3>
        <p className="text-base">{props.project.description}</p>

        <div className="flex gap-4">
          <a
            href={props.project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${utilStyles.btn} ${utilStyles.btnSecondary}`}
          >
            demo <i class="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href={props.project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${utilStyles.btn} ${utilStyles.btnSecondary}`}
          >
            code <i class="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
