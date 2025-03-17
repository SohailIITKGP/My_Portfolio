import { ExternalLink, Github, Tags, CheckCircle2 } from 'lucide-react'

const projects = [
  {
    title: 'AI Career Coach',
    description: [
      "Developed an AI-powered career coaching platform to assist professionals in job search and career growth",
      "Implemented AI-driven career guidance system providing personalized job recommendations and skill development paths",
      "Designed an adaptive interview preparation tool with role-specific questions, mock interviews, and instant feedback",
      "Built an ATS-optimized resume generator to enhance job application success with AI-assisted formatting and keyword suggestions",
      "Integrated an AI-powered cover letter generator for crafting personalized, job-specific cover letters",
      "Developed a real-time industry insights module offering salary benchmarks, market trends, and emerging skills data",
      "Implemented a skill development recommendation system suggesting relevant courses and certifications based on career goals"
    ],
    github: 'https://github.com/SohailIITKGP/Sensai',
    demo: 'https://sensai-woad.vercel.app',
    tags: ['NextJS', 'TypeScript', 'Prisma', 'Convex', 'Inngest', 'Tailwind CSS']
  },
  {
    title: 'Postman Clone',
    description: [
      "Built a Postman-like API testing tool to input endpoints, manage headers, and view responses, improving skills in API request handling and testing",
      "Implemented features like GET, POST, PUT, and DELETE request handling, allowing users to interact with API endpoints",
      "Designed a user-friendly interface with request history and saved API collections for better usability",
      "Added support for authentication methods like API keys, Bearer tokens, and Basic Auth to test secured endpoints",
      "Integrated response formatting with JSON prettification and syntax highlighting for better readability",
      "Developed an error-handling system to display response status codes, headers, and request execution time"
    ],    
    github: 'https://github.com/SohailIITKGP/Postman-Clone',
    demo: 'https://postman-clone-pink.vercel.app/',
    tags: ['ReactJS', 'JavaScript', 'Tailwind CSS','TypeScript']
  },
  {
    title: 'Chat Box',
    description: [
      "Developed a full-stack application with live chat functionality for seamless user chatting and messaging, leveraging UI libraries to enhance user interactivity and experience",
      "Optimized backend communication for efficient handling of chats and sharing of files, also implemented group chats for people to have conversations within groups",
      "Integrated real-time messaging using WebSockets to ensure instant message delivery and smooth user experience",
      "Implemented end-to-end encryption for secure communication and data privacy",
      "Added support for multimedia sharing, allowing users to send images, videos, and documents within chats",
      "Designed a notification system to alert users of new messages, mentions, and group activities",
      "Developed a message status feature, including sent, delivered, and read receipts to enhance communication transparency",
      "Built a responsive and intuitive UI with dark mode support for improved user experience"
    ],
    github: 'https://github.com/SohailIITKGP/Chatbox',
    demo: 'https://chatbox-six-roan.vercel.app/',
    tags: ['NextJS', 'TypeScript', 'NodeJS','ExpressJS']
  },
  {
    title: 'Job Portal Web Application ',
    description: [
      "Developed a full-stack job portal with real-time job posting, application tracking, and role-based access control, ensuring efficient data management using RESTful APIs and MySQL",
      "Implemented secure user authentication with JWT tokens and bcrypt hashing, enhancing data security and access control",
      "Integrated email notifications using Nodemailer to inform users about job applications, interview updates, and employer responses",
      "Designed an intuitive dashboard for recruiters and job seekers, featuring job recommendations, saved listings, and application status tracking"
    ],    
    github: 'https://github.com/SohailIITKGP/Job-Portal-Web-Application',
    demo: 'https://github.com/SohailIITKGP/Job-Portal-Web-Application',
    tags: ['NextJS','NodeJS', 'ExpressJS', 'NodeMailer', 'MySQL']
  },
  {
    title: 'AI Expense Tracker',
    description: [
      "Integrated Google Generative AI to analyze user financial data, including income, expenses, and budgets, for actionable insights",
      "Implemented a user-friendly interface for seamless data input and retrieval of AI-generated financial advice",
      "Enhanced user experience with intelligent financial management features, helping users optimize savings and budgeting",
      "Utilized modern web development practices to ensure a scalable and high-performance application",
      "Designed a secure data handling system to protect sensitive financial information while maintaining compliance with best practices"
    ],
    github: 'https://github.com/SohailIITKGP/FinanSmart',
    demo: 'https://finan-smart-sand.vercel.app',
    tags: ['NextJS', 'TypeScript', 'NodeJS','DriggleORM','Clerk','Convex']
  },
  {
    title: 'TODO Web Application',
    description: [
      "Developed a simple and intuitive To-Do web application for task management and productivity tracking",
      "Implemented features like task creation, editing, deletion, and status updates to help users stay organized",
      "Designed a clean and responsive UI using modern frontend technologies for a seamless user experience",
      "Integrated local storage and database support to ensure task persistence across sessions"
    ],
    github: 'https://github.com/SohailIITKGP/Todo',
    demo: 'https://to-do-app-ruddy-seven.vercel.app/',
    tags: ['NextJS', 'TypeScript', 'Prisma','Clerk','Convex']
  }
];

export default function Projects() {
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
          <span className="text-blue-600 font-semibold mb-4 block">PORTFOLIO</span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Projects
            </span>
          </h1>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore my showcase of innovative solutions and technical expertise. Each project demonstrates my commitment to creating impactful and scalable applications.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-blue-50/30 backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-blue-100/20"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-blue-50 p-2 text-blue-600 hover:bg-blue-100 transition-colors duration-300 transform hover:scale-110"
                      title="View Source Code"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-emerald-50 p-2 text-emerald-600 hover:bg-emerald-100 transition-colors duration-300 transform hover:scale-110"
                      title="View Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 px-3 py-1 text-sm font-medium text-blue-600 border border-blue-100/30"
                    >
                      <Tags className="mr-1 h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 