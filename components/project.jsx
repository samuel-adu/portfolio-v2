import Image from "next/image";

export default function Project(props) {
  return (
    <div className="border border-solid border-[var(--clr-neutral-400)] flex flex-col">
      <div className="relative flex-1">
        <div className="relative w-full h-72">
          <Image
            src={`/images/${props.project.img}`}
            alt="project preview"
            fill
          />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl capitalize">{props.project.title}</h3>
        <p className="text-base">{props.project.description}</p>

        <div className="mt-auto">
          <a
            href={props.project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-1/2 text-base"
          >
            View project <i class="fa-solid fa-up-right-from-square"></i>
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
