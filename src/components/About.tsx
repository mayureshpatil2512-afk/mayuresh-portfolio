export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            About Me
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Passionate about SEO, modern web development and
            creating fast, accessible websites.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <h3 className="text-2xl font-semibold text-blue-600">
              Professional Summary
            </h3>

            <p className="mt-6 leading-8 text-gray-600">

              I am an aspiring SEO Analyst and Frontend Developer
              learning Technical SEO, Google Search Console,
              Google Analytics 4, React, Next.js and performance
              optimization.

              My goal is to build websites that are fast,
              user-friendly and rank well on search engines.

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
                  1000+
                </h4>

                <p className="mt-2 text-lg font-medium text-slate-900">
  Learning Hours
</p>

              </div>

              <div className="rounded-xl bg-blue-50 p-5">

                <h4 className="text-4xl font-bold text-blue-600">
                  Fresher
                </h4>

                <p className="mt-2 text-lg font-medium text-slate-900">
  Experience
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

              {[
                "Technical SEO",
                "Google Search Console",
                "Google Analytics 4",
                "Next.js",
                "React",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Tailwind CSS",
                "Core Web Vitals",
                "Schema Markup",
                "Git",
                "GitHub",
              ].map((skill) => (

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
                    


















