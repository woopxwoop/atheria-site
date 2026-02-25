import { Project } from "@/app/lib/definitions";

export default async function AboutProject({ project }: { project: Project }) {
  return (
    <div className="w-[70%]">
      <h1>{project.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
    </div>
  );
}
