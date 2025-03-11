import { ExternalLink, Github, Tags, CheckCircle2 } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: [
      'Developed a full-stack e-commerce platform with real-time inventory management',
      'Implemented secure payment gateway integration with Stripe and PayPal',
      'Built responsive admin dashboard for order management and analytics',
      'Achieved 40% improvement in page load time through optimization'
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe']
  },
  {
    title: 'Social Media Dashboard',
    description: [
      'Created a real-time social media analytics dashboard with live data updates',
      'Integrated multiple social media APIs (Twitter, Instagram, Facebook)',
      'Implemented advanced data visualization using D3.js and Chart.js',
      'Built custom reporting system with PDF export functionality'
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'D3.js', 'Firebase']
  },
  {
    title: 'AI-Powered Task Manager',
    description: [
      'Developed an AI-powered task management system with smart task prioritization',
      'Implemented natural language processing for task creation and management',
      'Built automated reminder system with email and push notifications',
      'Created collaborative workspace features with real-time updates'
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
    tags: ['React', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL']
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