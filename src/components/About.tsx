import { skills } from "@/data/skills";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            About Me
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            B.Com. graduate with experience in Social Media Marketing,
            SEO and Digital Marketing.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <h3 className="text-2xl font-semibold text-blue-600">
              Professional Summary
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              I am a B.Com. graduate and SEO Analyst with 1 year of
              experience in Social Media Marketing and Digital Marketing.
              I have hands-on knowledge of SEO, keyword research,
              on-page SEO, off-page SEO, Google Search Console and
              Google Analytics 4.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              I am interested in helping businesses improve their online
              visibility through search engine optimization, social media
              marketing, content optimization and data-driven digital
              marketing strategies.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-blue-50 p-5">

                <h4 className="text-4xl font-bold text-blue-600">
                  10+
                </h4>

                <p className="mt-2 text-lg font-medium text-black">
                  Projects
                </p>

              </div>

              <div className="rounded-xl bg-blue-50 p-5">

                <h4 className="text-4xl font-bold text-blue-600">
                  5+
                </h4>

                <p className="mt-2 text-lg font-medium text-black">
                  Certifications
                </p>

              </div>

              <div className="rounded-xl bg-blue-50 p-5">

                <h4 className="text-4xl font-bold text-blue-600">
                  1+
                </h4>

                <p className="mt-2 text-lg font-medium text-slate-900">
                  Years Experience
                </p>

              </div>

              <div className="rounded-xl bg-blue-50 p-5">

                <h4 className="text-4xl font-bold text-blue-600">
                  B.Com.
                </h4>

                <p className="mt-2 text-lg font-medium text-slate-900">
                  Education
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-2xl font-semibold text-blue-600">
              Skills
            </h3>

            <div className="mt-8 flex flex-wrap gap-4">

              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-100 px-5 py-2 font-medium text-blue-700"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}