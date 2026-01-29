import { nameToPath } from "@/app/lib/utils";
import { projects } from "@/app/lib/project-data";
import { Project } from "@/app/lib/definitions";
import AboutProject from "@/app/ui/AboutProject";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project: Project | undefined = projects.find((p) => {
    return nameToPath(p.codename ?? p.title) === slug;
  });

  // console.log(project);

  const isValidProject: boolean = typeof project !== "undefined";

  return (
    <main className="w-full flex flex-col justify-center items-center">
      {isValidProject ? (
        <AboutProject project={project as Project} />
      ) : (
        <> 404 Project Not Found </>
      )}
    </main>
  );
}
