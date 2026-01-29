import { projects } from "@/app/lib/project-data";
import Link from "next/link";
import { nameToPath } from "@/app/lib/utils";

export default async function Page() {
  return (
    <main>
      <p className="align-middle">Projects</p>
      {projects.map((project) => {
        return (
          <div key={project.title}>
            <Link
              href={`/project/${nameToPath(project.codename ?? project.title)}`}
            >
              {project.codename ?? project.title}
            </Link>
          </div>
        );
      })}
    </main>
  );
}
