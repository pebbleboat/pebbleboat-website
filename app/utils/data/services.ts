export interface Service {
  icon: string;
  title: string;
  slug: string;
  desc: string;
  features: {
    title: string;
    description: string;
  }[];
  metaDescription: string;
  metaTitle: string;
}

export const services: Service[] = [
  {
    icon: "🚀",
    title: "MVP Development",
    slug: "mvp-development",
    desc: "Launch your product faster with our end-to-end MVP development. We build scalable MVPs in 4–6 weeks, helping you validate your idea and get to market quickly.",
    features: [
      {
        title: "Rapid Prototyping",
        description: "Quick iteration cycles to test and refine your concept before full development.",
      },
      {
        title: "User-Focused Design",
        description: "Design that puts your users first, ensuring intuitive and engaging experiences.",
      },
      {
        title: "Scalable Architecture",
        description: "Built to grow with your business, not just meet initial requirements.",
      },
      {
        title: "Post-Launch Support",
        description: "Ongoing maintenance and updates to keep your MVP running smoothly.",
      },
    ],
    metaTitle: "MVP Development Services | Pebbleboat",
    metaDescription:
      "Launch your product faster with our end-to-end MVP development. We build scalable MVPs in 4–6 weeks, helping you validate your idea and get to market quickly. Rapid prototyping, user-focused design, scalable architecture, and post-launch support.",
  },
  {
    icon: "💻",
    title: "Full-Stack Web Applications",
    slug: "full-stack-web-applications",
    desc: "Custom web applications built with modern technologies. From dashboards to e-commerce platforms, we create solutions that grow with your business.",
    features: [
      {
        title: "Responsive Design",
        description: "Applications that work seamlessly across all devices and screen sizes.",
      },
      {
        title: "Cloud Deployment",
        description: "Scalable cloud infrastructure for reliable and fast performance.",
      },
      {
        title: "API Integration",
        description: "Seamless integration with third-party services and APIs.",
      },
      {
        title: "Performance Optimization",
        description: "Fast loading times and optimized user experiences.",
      },
    ],
    metaTitle: "Full-Stack Web Applications Development | Pebbleboat",
    metaDescription:
      "Custom web applications built with modern technologies. From dashboards to e-commerce platforms, we create solutions that grow with your business. Responsive design, cloud deployment, API integration, and performance optimization.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    desc: "Native-feeling mobile apps for iOS and Android using React Native. One codebase, two platforms, seamless user experience.",
    features: [
      {
        title: "Cross-Platform",
        description: "Build once, deploy to both iOS and Android with a single codebase.",
      },
      {
        title: "Native Performance",
        description: "Apps that feel and perform like native applications.",
      },
      {
        title: "App Store Deployment",
        description: "Full support for publishing to Apple App Store and Google Play Store.",
      },
      {
        title: "Push Notifications",
        description: "Engage users with real-time push notifications.",
      },
    ],
    metaTitle: "Mobile App Development Services | Pebbleboat",
    metaDescription:
      "Native-feeling mobile apps for iOS and Android using React Native. One codebase, two platforms, seamless user experience. Cross-platform development, native performance, app store deployment, and push notifications.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    desc: "Beautiful, intuitive interfaces that users love. We combine design thinking with user research to create engaging experiences.",
    features: [
      {
        title: "User Research",
        description: "Deep understanding of your users' needs and behaviors.",
      },
      {
        title: "Wireframing",
        description: "Clear structure and layout planning before visual design.",
      },
      {
        title: "Prototyping",
        description: "Interactive prototypes to test and validate design concepts.",
      },
      {
        title: "Design Systems",
        description: "Consistent design language and reusable components.",
      },
    ],
    metaTitle: "UI/UX Design Services | Pebbleboat",
    metaDescription:
      "Beautiful, intuitive interfaces that users love. We combine design thinking with user research to create engaging experiences. User research, wireframing, prototyping, and design systems.",
  },
  {
    icon: "⚡",
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    desc: "Scalable infrastructure and deployment pipelines. We ensure your applications are fast, secure, and always available.",
    features: [
      {
        title: "AWS/Azure/GCP",
        description: "Expert deployment on major cloud platforms.",
      },
      {
        title: "CI/CD Pipelines",
        description: "Automated testing and deployment workflows.",
      },
      {
        title: "Monitoring & Logging",
        description: "Real-time monitoring and comprehensive logging solutions.",
      },
      {
        title: "Auto-Scaling",
        description: "Automatic resource scaling based on demand.",
      },
    ],
    metaTitle: "Cloud & DevOps Services | Pebbleboat",
    metaDescription:
      "Scalable infrastructure and deployment pipelines. We ensure your applications are fast, secure, and always available. AWS/Azure/GCP, CI/CD pipelines, monitoring & logging, and auto-scaling.",
  },
  {
    icon: "🔧",
    title: "Consulting & Strategy",
    slug: "consulting-strategy",
    desc: "Expert guidance on technology decisions, architecture, and product strategy. Let us help you make the right choices.",
    features: [
      {
        title: "Technical Audits",
        description: "Comprehensive reviews of your existing technology stack and infrastructure.",
      },
      {
        title: "Architecture Reviews",
        description: "Expert evaluation of your system architecture and recommendations for improvement.",
      },
      {
        title: "Product Strategy",
        description: "Strategic planning to align technology with business goals.",
      },
      {
        title: "Team Mentoring",
        description: "Knowledge transfer and team upskilling to build internal capabilities.",
      },
    ],
    metaTitle: "Consulting & Strategy Services | Pebbleboat",
    metaDescription:
      "Expert guidance on technology decisions, architecture, and product strategy. Let us help you make the right choices. Technical audits, architecture reviews, product strategy, and team mentoring.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

