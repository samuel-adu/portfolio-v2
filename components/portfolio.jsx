import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import styles from "./portfolio.module.css";
import Project from "./project";
import { projects } from "../data.js";

export default function Portfolio() {
  const projectList = projects.map((project) => {
    return <Project key={project.title} project={project} />;
  });

  return (
    <section id="portfolio">
      <h2 className="text-4xl text-center">Portfolio</h2>

      <div className="grid gap-4 md:grid-cols-4">{projectList}</div>
    </section>
  );
}
