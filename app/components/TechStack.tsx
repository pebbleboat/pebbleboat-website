const technologies = [
  { name: "Next.js", category: "Frontend", color: "bg-black" },
  { name: "React", category: "Frontend", color: "bg-blue-500" },
  { name: "TypeScript", category: "Language", color: "bg-blue-600" },
  { name: "React Native", category: "Mobile", color: "bg-cyan-500" },
  { name: "Node.js", category: "Backend", color: "bg-green-600" },
  { name: "Express", category: "Backend", color: "bg-[#1a1a1a]" },
  { name: "PostgreSQL", category: "Database", color: "bg-blue-700" },
  { name: "MongoDB", category: "Database", color: "bg-green-500" },
  { name: "AWS", category: "Cloud", color: "bg-orange-500" },
  { name: "Docker", category: "DevOps", color: "bg-blue-400" },
  { name: "Tailwind CSS", category: "Frontend", color: "bg-cyan-400" },
  { name: "GraphQL", category: "API", color: "bg-pink-600" },
];

export default function TechStack() {
  const categories = Array.from(
    new Set(technologies.map((tech) => tech.category))
  );

  return (
    <section id="tech" className="py-24 bg-gradient-to-br from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#84a7b1] to-white bg-clip-text text-transparent">
            Our Tech Stack
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Modern technologies we use to build exceptional products
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group bg-[#1a1a1a] p-6 rounded-xl border-2 border-[#2a2a2a] hover:border-[#84a7b1] hover:shadow-lg hover:shadow-[#84a7b1]/20 transition-all duration-300 text-center"
            >
              <div
                className={`w-12 h-12 ${tech.color} rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform shadow-lg`}
              >
                {tech.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
              <p className="text-xs text-white/70">{tech.category}</p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 border-2 border-[#2a2a2a]">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">
            What We Specialize In
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-semibold mb-2 text-white">Frontend Excellence</h4>
              <p className="text-white/80 text-sm">
                Modern React-based applications with beautiful UIs
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚙️</div>
              <h4 className="font-semibold mb-2 text-white">Robust Backends</h4>
              <p className="text-white/80 text-sm">
                Scalable server architectures and APIs
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">☁️</div>
              <h4 className="font-semibold mb-2 text-white">Cloud Infrastructure</h4>
              <p className="text-white/80 text-sm">
                Deploy and scale with confidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  