import { Award, Calendar, Users } from "lucide-react";

export default function Responsibilities() {
  const positions = [
    {
      title: "Technical Lead - College Tech Club",
      organization: "Engineering College",
      period: "2021 - 2022",
      responsibilities: [
        "Led a team of 20+ members in organizing technical events and workshops",
        "Conducted weekly coding sessions and mentored junior students",
        "Organized annual tech fest with 1000+ participants",
        "Developed and maintained the club's website",
        "Established partnerships with tech companies for sponsorships"
      ],
      achievements: [
        "Best Technical Club Award 2022",
        "Successfully organized 15+ technical workshops",
        "Increased club membership by 40%"
      ]
    },
    {
      title: "Student Coordinator - Placement Cell",
      organization: "Engineering College",
      period: "2020 - 2021",
      responsibilities: [
        "Coordinated with 50+ companies for campus placements",
        "Managed a team of 10 coordinators for placement activities",
        "Organized pre-placement talks and interviews",
        "Created and maintained student placement database",
        "Conducted mock interviews and resume building workshops"
      ],
      achievements: [
        "Achieved 85% placement rate",
        "Brought 20 new companies to campus",
        "Best Coordinator Award 2021"
      ]
    },
    {
      title: "Project Head - College Innovation Cell",
      organization: "Engineering College",
      period: "2019 - 2020",
      responsibilities: [
        "Led multiple innovative projects in emerging technologies",
        "Mentored 30+ students in project development",
        "Organized innovation challenges and hackathons",
        "Collaborated with industry experts for project guidance",
        "Published research papers in international conferences"
      ],
      achievements: [
        "Won National Level Project Competition",
        "2 Patent Applications Filed",
        "Best Innovation Award 2020"
      ]
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
          <span className="text-blue-600 font-semibold mb-4 block">RESPONSIBILITIES</span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Key{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Responsibilities
            </span>
          </h1>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover the various roles and responsibilities I've handled in my professional journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {positions.map((position, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600" />
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {position.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Users className="h-4 w-4" />
                  <span>{position.organization}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <Calendar className="h-4 w-4" />
                  <span>{position.period}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {position.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2 mr-2" />
                        <span className="text-gray-600">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {position.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <Award className="h-4 w-4 text-blue-600 mt-1 mr-2" />
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 