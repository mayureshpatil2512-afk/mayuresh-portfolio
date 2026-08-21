import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-blue-600">
  My Projects
</h2>

          <p className="mt-4 text-black">
  Projects demonstrating my skills in SEO,
  web development and analytics.
</p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>
    </section>
  );
}