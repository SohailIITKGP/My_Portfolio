import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "Mumbai, India",
      period: "Jan 2022 - Present",
      responsibilities: [
        "Led a team of 5 developers in developing a high-traffic e-commerce platform",
        "Improved application performance by 40% through code optimization and caching",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Architected and implemented microservices architecture"
      ],
      tech: ["React", "Node.js", "AWS", "Docker", "MongoDB"]
    },
    {
      title: "Software Developer",
      company: "Digital Innovations",
      location: "Bangalore, India",
      period: "Jun 2020 - Dec 2021",
      responsibilities: [
        "Developed and maintained multiple client-facing web applications",
        "Integrated third-party APIs and payment gateways",
        "Reduced server response time by 50% through database optimization",
        "Created reusable component library used across projects",
        "Implemented automated testing reducing bug reports by 30%"
      ],
      tech: ["Angular", "Python", "PostgreSQL", "Redis", "Jenkins"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Tech",
      location: "Delhi, India",
      period: "Jan 2019 - May 2020",
      responsibilities: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Collaborated with UI/UX team to implement pixel-perfect designs",
        "Developed RESTful APIs for mobile applications",
        "Participated in daily stand-ups and sprint planning",
        "Contributed to improving development processes"
      ],
      tech: ["JavaScript", "React", "Express.js", "MySQL", "Git"]
    }
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-blue-50/80 via-cyan-50/40 to-emerald-50/60 py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] -z-10"></div>
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[800px] rounded-full bg-blue-100/20 blur-3xl"></div>
        <div className="absolute right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/20 blur-3xl"></div>
        <div className="absolute left-20 w-[600px] h-[600px] rounded-full bg-cyan-100/20 blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-4 block">EXPERIENCE</span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Journey
            </span>
          </h1>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-emerald-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -left-[11px] md:-left-3 top-0 w-8 md:w-14 h-8 md:h-14 rounded-full bg-white/80 backdrop-blur-sm shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute inset-1.5 md:inset-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600" />
                </div>

                <div className="ml-8 md:ml-20">
                  <div className="bg-gradient-to-br from-white/80 to-blue-50/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-blue-100/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-xl text-blue-600">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-gray-700 mb-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 mt-2 mr-2" />
                            <span className="text-gray-700">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-full border border-blue-100/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 