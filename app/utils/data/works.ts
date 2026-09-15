export interface IProject {
  id: string;
  title: string;
  category: "web" | "mobile";
  categoryLabel: string;
  image: string;
  originalImage: string;
  client: string;
  languages: string[];
  previewUrl: string;
  date: string;
  description: string;
}

export const projects: IProject[] = [
  {
    id: "proj-chakkiwala",
    title: "Chakkiwaala",
    category: "mobile",
    categoryLabel: "Hyperlocal Marketplace App",
    image: "/projects/chakkiwala_thumb.jpg",
    originalImage: "/projects/chakkiwala_thumb.jpg",
    client: "Chakkiwaala Marketplace",
    languages: ["React Native", "Node.js", "Express", "MongoDB", "Redux"],
    previewUrl: "https://github.com/SuryanshShahi",
    date: "2025 - 2026",
    description:
      "Chakkiwaala is a hyperlocal marketplace app connecting local chakkis (flour mills) with customers. Enables users to discover nearby mills, order freshly ground staples, and track orders across four stages in real time: Started Preparing, In Progress, Out for Delivery, and Delivered. Features a dedicated merchant dashboard for instant order processing and fulfillment dispatch.",
  },
  {
    id: "proj-wobli",
    title: "Wobli 3D Miniatures",
    category: "web",
    categoryLabel: "3D E-Commerce & Customizer",
    image: "/projects/wobli_thumb.jpg",
    originalImage: "/projects/wobli3d.png",
    client: "Wobli Studio",
    languages: ["Next.js", "Three.js", "React", "Tailwind CSS", "Razorpay"],
    previewUrl: "https://wobli3d.vercel.app/",
    date: "2025 - 2026",
    description:
      "Next-generation 3D printing and custom figurine e-commerce platform. Features photo-to-miniature workflows, interactive 3D model customization in real-time WebGL viewports, live order tracking, and integrated secure payment pipelines.",
  },
  {
    id: "proj-dance-studio",
    title: "Rhythm Dance Studio",
    category: "web",
    categoryLabel: "Creative Arts & Booking",
    image: "/projects/dance_studio_thumb.jpg",
    originalImage: "/projects/dance_studio.png",
    client: "Rhythm Studio",
    languages: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    previewUrl: "https://dance-studio-beta.vercel.app/",
    date: "2025",
    description:
      "High-octane web platform for a premier urban dance studio. Features dynamic video heroes, interactive class schedules, instructor profiles, event galleries, and instant class reservation flows.",
  },
  {
    id: "proj-kineticx",
    title: "Kinetix 3D Footwear Lab",
    category: "web",
    categoryLabel: "Interactive 3D & WebGL",
    image: "/projects/kineticx_thumb.jpg",
    originalImage: "/projects/kineticx.png",
    client: "Aero-Propulsion Lab",
    languages: ["React", "Three.js", "WebGL", "GSAP", "Tailwind CSS"],
    previewUrl: "https://kineticx-3d.vercel.app/",
    date: "2025",
    description:
      "Cutting-edge 3D product showcase featuring 360° spatial rotation, scroll-driven chassis deconstruction, interactive carbon plate telemetry, and physics-accurate material rendering.",
  },
  {
    id: "proj-pebbleboat",
    title: "Pebbleboat Technologies",
    category: "web",
    categoryLabel: "Digital Product Studio",
    image: "/projects/pebbleboat_thumb.jpg",
    originalImage: "/projects/pebbleboat.png",
    client: "Pebbleboat Inc.",
    languages: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    previewUrl: "https://pebbleboat.com/",
    date: "2024 - 2025",
    description:
      "Modern agency platform showcasing design-first full-stack development, mobile app prototypes, microservices architecture, client case studies, and automated lead capture pipelines.",
  },
  {
    id: "proj-1",
    title: "Oeuvre Official",
    category: "web",
    categoryLabel: "Luxury E-Commerce",
    image: "/projects/oeuvre_thumb.jpg",
    originalImage: "/projects/oeuvre.png",
    client: "Oeuvre Official",
    languages: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    previewUrl: "https://oeuvre0.netlify.app/",
    date: "2024",
    description:
      "Elegant design and smooth functionality, with a focus on an immersive browsing experience for handcrafted luxury pieces and modern apparel collections.",
  },
  {
    id: "proj-2",
    title: "Hangers India",
    category: "web",
    categoryLabel: "Retail & E-Commerce",
    image: "/projects/hangers_thumb.jpg",
    originalImage: "/projects/hangers.png",
    client: "Hangers India",
    languages: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    previewUrl: "https://www.hangersindia.com",
    date: "2024",
    description:
      "Intuitive navigation and a professional e-commerce showcase engineered for premium clothing hangers, customized wardrobes, and retail accessories.",
  },
  {
    id: "proj-3",
    title: "The OG Burger",
    category: "web",
    categoryLabel: "Food & Restaurant",
    image: "/projects/og_thumb.jpg",
    originalImage: "/projects/og.png",
    client: "The OG Burger",
    languages: ["Next.js", "React", "Tailwind CSS", "UI/UX"],
    previewUrl: "https://og-burger.netlify.app/",
    date: "2024",
    description:
      "Giving OG Burger a cool, funky, and foodie brand aesthetic to attract customers, featuring online ordering workflows and responsive layout.",
  },
  {
    id: "proj-4",
    title: "Kiddle School",
    category: "web",
    categoryLabel: "EdTech & Learning",
    image: "/projects/kiddle_thumb.jpg",
    originalImage: "/projects/kiddle.png",
    client: "Kiddle School",
    languages: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    previewUrl: "https://kiddle.school",
    date: "2024",
    description:
      "A modern educational web app with interactive design and joyful animations centered around children's learning, creativity, and school admissions.",
  },
  {
    id: "proj-5",
    title: "Global Scholar",
    category: "web",
    categoryLabel: "Education Consultancy",
    image: "/projects/global_thumb.jpg",
    originalImage: "/projects/global.png",
    client: "Global Scholar UK",
    languages: ["Next.js", "React", "Tailwind CSS", "SEO"],
    previewUrl: "https://globalscholar.co.uk",
    date: "2024",
    description:
      "Built a polished, informative international platform for Global Scholar, offering a seamless portal for students and educators to explore academic opportunities, university admissions, and resources.",
  },
  {
    id: "proj-6",
    title: "AixGrow",
    category: "web",
    categoryLabel: "Growth & Analytics",
    image: "/projects/aixgrow_thumb.jpg",
    originalImage: "/projects/aixgrow.png",
    client: "AixGrow",
    languages: ["Next.js", "React", "Tailwind CSS", "Analytics"],
    previewUrl: "https://www.aixgrow.com/",
    date: "2024",
    description:
      "Growth acceleration platform featuring interactive metric dashboards, marketing funnel tracking, and automated client insights.",
  },
  {
    id: "proj-7",
    title: "POS System",
    category: "web",
    categoryLabel: "Web App & Backend",
    image: "/projects/pos_system.jpg",
    originalImage: "/projects/pos_system.jpg",
    client: "Retail Enterprise",
    languages: ["Next.js", "NestJS", "WebSocket", "Kafka", "Redis", "MongoDB"],
    previewUrl: "https://github.com/SuryanshShahi",
    date: "2025 - 2026",
    description:
      "Full-stack point-of-sale solution for event-driven order processing, real-time inventory synchronization, and analytics reporting built with Next.js, Nest.js, Redis, MongoDB, and Kafka.",
  },
  {
    id: "proj-8",
    title: "Real-time Chat App",
    category: "web",
    categoryLabel: "Web & Realtime",
    image: "/projects/chat_app.jpg",
    originalImage: "/projects/chat_app.jpg",
    client: "Communication Platform",
    languages: ["Next.js", "WebSocket", "Node.js", "Redis", "MongoDB", "AWS"],
    previewUrl: "https://github.com/SuryanshShahi",
    date: "2025",
    description:
      "Scalable real-time messaging application supporting private and group chats, media uploads, full message history search, online presence indicators, and instant push notifications backed by AWS.",
  },
  {
    id: "proj-9",
    title: "Automated Video Recorder",
    category: "web",
    categoryLabel: "Developer Tool",
    image: "/projects/video_recorder.jpg",
    originalImage: "/projects/video_recorder.jpg",
    client: "Developer Tooling",
    languages: ["Next.js", "Playwright", "TypeScript", "Node.js"],
    previewUrl: "https://github.com/SuryanshShahi",
    date: "2025",
    description:
      "Autonomous tool built to record smooth scrolling website product demos. Accepts a URL queue, allows customizable scroll velocities & easing curves, supports mid-recording stop, and auto-delivers MP4 recordings per site.",
  },
];

export function getAllProjects(): IProject[] {
  return projects;
}

export function getProjectById(id: string): IProject | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: string): IProject[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}
