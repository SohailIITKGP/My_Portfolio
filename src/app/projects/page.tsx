import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of project one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Project Three',
    description: 'A brief description of project three. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        My Projects
      </h1>
      
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              {project.title}
            </h3>
            
            <p className="mb-4 text-gray-600">
              {project.description}
            </p>
            
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-gray-900"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
              
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-gray-900"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 