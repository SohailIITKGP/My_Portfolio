import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Spring Fest",
      location: "IIT Kharagpur",
      period: "April 2024 - Jan 2025",
      "responsibilities": [
        "1. Developed and integrated front-end and back-end APIs for the Spring Fest app event registrations, supporting event rules (solo, group, or both). Implemented deregistration features for removing specific members or entire teams from events and enabled team updates post-registration to add more members.",
        "2. Integrated CA leaderboard APIs and developed interactive components for the Idea Sharing and Complaints pages with issue history tracking, contributing to 1500+ app downloads.",
        "3. Developed APIs for contingent features, allowing users to create contingents, manage members, join contingents using name-code pairs, and exit contingents. Revolutionized payment processes by enabling single-point transactions for entire groups and streamlined accommodation allocation through a unified allotment system.",
        "4. Implemented secure user authentication on the Spring Fest main website, including login/signup and Google authentication, facilitating 1 lakh+ participant registrations and onboarding 2,200+ users. Integrated payment APIs on the main website, successfully processing transactions exceeding 60 lakh from individual and contingent payments.",
        "5. Designed and developed the merchandise page with flexible delivery options, allowing users to choose between home delivery or on-site collection during the fest. Implemented a payment API with conditional logic to manage charges and workflows based on user-selected delivery preferences."
      ],
      tech: ["ReactJS", "NextJS", "React-Native(Expo)", "Node.js", "TypeScript", "MySql", "TailwindCSS", "Prisma"]
    },
    {
      title: "Development Innovation Intern",
      company: "Greenvayu",
      location: "Bhopal, MP",
      period: "Jun 2024 - Aug 2024",
      responsibilities: [
        "1. Developed a Learning Management System (LMS) with secure JWT authentication and role-based access control for admins, instructors, and students using Node.js, Next.js, and MySQL.",
        "2. Designed and optimized RESTful APIs for course creation, user enrollment, and progress tracking, ensuring efficient database operations with MySQL and Sequelize ORM.",
        "3. Built an interactive dashboard using Next.js/React, featuring student progress tracking, quizzes, and automated certificate generation with HTML-to-PDF conversion.",
        "4. Integrated video lectures with AWS S3/Cloudinary for scalable media storage and implemented real-time notifications for assignments and updates using WebSockets and Firebase Cloud Messaging."
      ],
      tech: ["NextJS", "TypeScript", "PostgreSQL", "AWS S3", "Cloudinary", "HTML-to-PDF Generation", "JWT Authentication"]
    },
    {
      title: "Frontend Developer",
      company: "Spring Fest",
      location: "IIT Kharagpur",
      period: "Oct 2023 - Jan 2024",
      "responsibilities": [
        "1. Implemented user authentication on the Spring Fest main website by integrating login, signup, Google login, and forgot password APIs, ensuring a seamless and secure authentication process.",
        "2. Developed the Accommodation page for the main website, designing an intuitive and visually appealing UI and implementing the necessary frontend and backend code for a smooth user experience.",
        "3. Integrated the 'Invite to Prom' API on the Prom Night website, allowing participants to invite partners to the event, enhancing user engagement and event participation.",
        "4. Designed the Spring Fest social website based on Figma designs, translating the provided UI/UX mockups into a fully functional and responsive web interface.",
        "5. Optimized UI/UX across multiple pages of the Spring Fest platform, ensuring a visually appealing and user-friendly interface aligned with modern web design principles."
      ],
      tech: ["JavaScript", "ReactJS", "CSS", "Git"]
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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Journey
            </span>
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            My professional journey and the impact I&apos;ve made at various organizations.
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