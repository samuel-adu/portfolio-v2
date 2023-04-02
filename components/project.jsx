import Image from "next/image";
import styles from "./portfolio.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Project(props) {
  return (
    <div className={`${styles.card} mb-6`}>
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

      <div className="p-6 flex flex-col">
        <h3 className="text-2xl capitalize">{props.project.title}</h3>
        <p className="text-base">{props.project.description}</p>

        <div className="flex">
          <a
            href={props.project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-1/2 text-base"
          >
            Preview site <i class="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href={props.project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-1/2 text-base"
          >
            View code <i class="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
