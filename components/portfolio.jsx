import Project from "./project";
import { projects } from "../data.js";

export default function Portfolio() {
  const projectList = projects.map((project) => {
    return <Project key={project.id} project={project} />;
  });

  return (
    <section id="portfolio">
      <h2 className="font-heading text-4xl font-bold ">Stuff I Built</h2>
      <div className="mb-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projectList}
      </div>
    </section>
  );
}
