const services = [
  {
    icon: "🚀",
    title: "MVP Development",
    desc: "Launch your product faster with our end-to-end MVP development. We build scalable MVPs in 4–6 weeks, helping you validate your idea and get to market quickly.",
    features: [
      "Rapid prototyping",
      "User-focused design",
      "Scalable architecture",
      "Post-launch support",
    ],
  },
  {
    icon: "💻",
    title: "Full-Stack Web Applications",
    desc: "Custom web applications built with modern technologies. From dashboards to e-commerce platforms, we create solutions that grow with your business.",
    features: [
      "Responsive design",
      "Cloud deployment",
      "API integration",
      "Performance optimization",
    ],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Native-feeling mobile apps for iOS and Android using React Native. One codebase, two platforms, seamless user experience.",
    features: [
      "Cross-platform",
      "Native performance",
      "App store deployment",
      "Push notifications",
    ],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces that users love. We combine design thinking with user research to create engaging experiences.",
    features: [
      "User research",
      "Wireframing",
      "Prototyping",
      "Design systems",
    ],
  },
  {
    icon: "⚡",
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure and deployment pipelines. We ensure your applications are fast, secure, and always available.",
    features: [
      "AWS/Azure/GCP",
      "CI/CD pipelines",
      "Monitoring & logging",
      "Auto-scaling",
    ],
  },
  {
    icon: "🔧",
    title: "Consulting & Strategy",
    desc: "Expert guidance on technology decisions, architecture, and product strategy. Let us help you make the right choices.",
    features: [
      "Technical audits",
      "Architecture reviews",
      "Product strategy",
      "Team mentoring",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  