import { Award, Calendar, Users } from "lucide-react";

export default function Responsibilities() {
  const positions = [
    {
      title: "Tech Head",
      organization: "Spring Fest",
      period: "2024 - 2025",
      certificateLink: "https://drive.google.com/file/d/1GBkTVjs4jPJtmS5NWZz77bZ5VVK3NCbQ/view?usp=drive_link",
      responsibilities: [
        "1. Led a team of 10 sub-heads, guiding them in web development to contribute to multiple websites for Spring Fest.",
        "2. Developed and maintained key digital platforms, including the Spring Fest main website, NWP website, Eliminations platform, and the Spring Fest app.",
        "3. Supervised all technical operations during the fest, ensuring seamless digital experiences by resolving real-time issues efficiently.",
        "4. Conducted training sessions to help junior members learn web development and contribute effectively to technical projects.",
        "5. Coordinated with non-tech teams, including design, and core, to ensure smooth integration of digital platforms and overall fest success.",
        "6. Played a pivotal role in designing and managing various WEB platforms for the fest's success."
      ]
    },
    {
      title: "Sponsorship - Senior Executive Member",
      organization: "Gopali Youth Welfare Society (NGO)",
      period: "2023 - 2024",
      certificateLink: "https://drive.google.com/your-certificate-link-2",
      responsibilities: [
        "1. Raised INR 9.6M (30% YoY growth) through various channels, including gift matching, fundraising, alumni outreach, and CSR initiatives.",
        "2. Secured INR 4.7M (23% YoY growth) within two weeks through the Gift Matching Program, reaching over 300,000 employees.",
        "3. Partnered with PubMatic India for a CSR contribution of INR 0.5M and collaborated with Feeding India to fulfill hostel food needs worth INR 4M annually.",
        "4. Guided 20 junior executive members in fundraising efforts, targeting over 500 alumni from more than six institutes through direct outreach and calls."
      ]
    },
    {
      title: "Social and Cultural Secretary",
      organization: "Homi Jehangir Bhabha Hall of Residence, IIT Kharagpur",
      period: "2023 - 2024",
      certificateLink: "https://drive.google.com/file/d/1502qYGMHTAxLbvJvmoUnEnxgWeT9vcXH/view?usp=drive_link",
      responsibilities: [
        "1. Coordinated participation and resident engagement in cultural events for IIT Kharagpur's General Championship 2024",
        "2. Successfully organized and supervised multiple events, ensuring smooth operations and high levels of participation",
        "3. Facilitated communication between residents and hall administration to address concerns and enhance community life",
        "4. Worked closely with other secretaries and hall council members to create a vibrant and inclusive cultural environment"
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
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {position.title}
                  </h3>
                  <a href={position.certificateLink} target="_blank" rel="noopener noreferrer">
                    <Award className="h-6 w-6 text-blue-600 hover:text-blue-800 transition-colors duration-300" />
                  </a>
                </div>
                
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
                        <span className="text-gray-600">{resp}</span>
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
