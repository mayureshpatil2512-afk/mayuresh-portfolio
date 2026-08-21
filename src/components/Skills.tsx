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
            Technologies and tools I use to build modern websites.
          </p>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          {skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-blue-100
                bg-white
                px-6
                py-3
                font-medium
                text-slate-700
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-blue-300
                hover:bg-blue-600
                hover:text-white
                hover:shadow-md
              "
            >
              {skill}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}