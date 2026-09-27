import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            My Skills
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Skills and tools I use for SEO, Digital Marketing and Social Media Marketing.
          </p>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-100 px-6 py-4 text-xl font-medium text-blue-700 transition hover:bg-blue-200"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}