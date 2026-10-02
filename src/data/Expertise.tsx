export default function Expertise() {
  const expertise = [
    {
      title: "Search Engine Optimization",
      description:
        "Keyword research, on-page SEO, technical SEO, off-page SEO and SEO content optimization focused on improving website visibility.",
    },
    {
      title: "Google Search Console",
      description:
        "Search performance monitoring, indexing checks, sitemap management and technical SEO analysis using Google Search Console.",
    },
    {
      title: "Google Analytics 4",
      description:
        "Website traffic analysis, user engagement measurement and digital marketing reporting using Google Analytics 4.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Social media management, content planning, audience engagement and digital marketing activities across social platforms.",
    },
    {
      title: "Keyword Research",
      description:
        "Researching relevant search terms and organizing keywords to support SEO content and website optimization.",
    },
    {
      title: "Competitor Analysis",
      description:
        "Analyzing competitor websites, content and search visibility to identify relevant SEO and digital marketing opportunities.",
    },
  ];

  return (
    <section id="expertise" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            SEO & Digital Marketing Expertise
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Practical experience in SEO, search performance, social media
            marketing and digital marketing activities focused on improving
            online visibility and audience engagement.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}