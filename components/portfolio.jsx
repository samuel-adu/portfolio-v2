/* eslint-disable react/no-unescaped-entities */
import Project from "./project";
import { projects } from "../data.js";

export default function Portfolio() {
  return (
    <>
      <h2 className="text-3xl font-semibold">Some Stuff I've Built</h2>
      <div className="mb-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </>
  );
}
