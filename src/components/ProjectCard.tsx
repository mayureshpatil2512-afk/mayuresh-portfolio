import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl bg-white shadow-lg overflow-hidden hover:shadow-2xl transition">

      <div className="h-52 bg-gray-200 flex items-center justify-center">

        <span className="text-gray-500">
          Project Image
        </span>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900">
  {project.title}
</h3>

        <p className="mt-4 text-gray-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="mt-8 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}