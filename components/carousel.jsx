import { projects } from "../utils/data/projects";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  return (
    <div id="carousel" className="carousel-slider mb-6">
      <div className="barrier">
        <ul className="lane">
          {/* use concat just to duplicate and populate the carousel */}
          {projects.concat(projects).map((project, index) => (
            <li key={index} className="car">
              <div className="card product laptop:w-60 hp:w-40 laptop:h-96 hp:h-72 m-5 text-center p-4 flex gap-2 flex-col justify-between">
                <Image
                  src={project.image}
                  alt="prod-1"
                  className="w-full object-cover laptop:h-44 hp:h-24"
                  width={200}
                  height={200}
                />
                <h3 className="laptop:text-lg hp:text-sm">{project.title}</h3>
                <p className="laptop:text-sm hp:text-xs max-h-16 overflow-auto">
                  {project.description}
                </p>
                <Link href={project.url} target="_blank" rel="noreferrer">
                  <span className="block bg-slate-700 rounded-xl p-1 w-full text-amber-300 mt-auto">
                    Link
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
