// Portfolio Data Configuration - Sammy
const portfolioData = {
  profile: {
    name: "Sammy",
    title: "Senior Full-Stack & AI Engineer",
    tagline: "Architecting intelligent, scalable web experiences & distributed AI solutions.",
    location: "Bengaluru, India",
    availability: "Available for high-impact roles & consultancies",
    bio: "Passionate software engineer and systems architect specializing in high-performance cloud applications, generative AI workflows, and modern web architectures. Dedicated to building refined digital products that blend technical rigor with exceptional craft.",
    email: "sammy.developer@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    resumeUrl: "#",
    experienceYears: "5+",
    projectsCompleted: "35+",
    codeCommits: "1.8k+",
    happyClients: "20+"
  },

  themePresets: [
    { id: "cyan", name: "Cyber Cyan", primary: "#00f2fe", secondary: "#4facfe", glow: "rgba(0, 242, 254, 0.35)" },
    { id: "purple", name: "Neon Violet", primary: "#a855f7", secondary: "#ec4899", glow: "rgba(168, 85, 247, 0.35)" },
    { id: "emerald", name: "Matrix Emerald", primary: "#10b981", secondary: "#06b6d4", glow: "rgba(16, 185, 129, 0.35)" },
    { id: "amber", name: "Solar Amber", primary: "#f59e0b", secondary: "#ef4444", glow: "rgba(245, 158, 11, 0.35)" }
  ],

  bentoStats: [
    {
      type: "metric",
      title: "Years of Craft",
      value: "5+",
      subtitle: "Full-cycle engineering from 0 to 1",
      icon: "rocket"
    },
    {
      type: "metric",
      title: "Production Projects",
      value: "35+",
      subtitle: "Enterprise & startup products shipped",
      icon: "code"
    },
    {
      type: "metric",
      title: "OSS & Git Activity",
      value: "1,800+",
      subtitle: "Contributions across repositories",
      icon: "git"
    },
    {
      type: "highlight",
      title: "Current Focus",
      value: "Agentic AI & Web3 Architecture",
      subtitle: "LLM orchestration, FastAPI microservices, and reactive web apps",
      icon: "cpu"
    }
  ],

  skills: {
    frontend: [
      { name: "JavaScript / TypeScript", level: 95 },
      { name: "React / Next.js", level: 90 },
      { name: "Vue / Nuxt", level: 82 },
      { name: "Modern CSS / Glassmorphism", level: 94 },
      { name: "Three.js / Canvas 2D", level: 78 },
      { name: "State Architecture (Zustand / Redux)", level: 88 }
    ],
    backend: [
      { name: "Python / FastAPI / Django", level: 94 },
      { name: "Node.js / Express / NestJS", level: 88 },
      { name: "PostgreSQL / Redis / MongoDB", level: 90 },
      { name: "GraphQL & REST APIs", level: 92 },
      { name: "Microservices & gRPC", level: 82 }
    ],
    aiAndData: [
      { name: "LangChain / LlamaIndex", level: 88 },
      { name: "OpenAI / Anthropic / Gemini SDKs", level: 92 },
      { name: "Vector DBs (Pinecone, Chroma, Qdrant)", level: 86 },
      { name: "Fine-tuning & RAG Pipelines", level: 85 },
      { name: "PyTorch & Data Processing", level: 76 }
    ],
    devopsAndTools: [
      { name: "Docker & Container Orchestration", level: 90 },
      { name: "Kubernetes & Helm", level: 75 },
      { name: "AWS / GCP / Cloudflare", level: 85 },
      { name: "CI/CD (GitHub Actions, GitLab)", level: 88 },
      { name: "Git / Linux System Administration", level: 92 }
    ]
  },

  projects: [
    {
      id: "resolve-ai",
      title: "ResolveAI - Autonomous Customer Support Suite",
      category: "ai",
      featured: true,
      tagline: "Multi-agent autonomous customer resolution engine with audit logging and self-correcting RAG workflows.",
      description: "An enterprise-grade autonomous support platform that parses inbound inquiries, orchestrates specialized LLM subagents, cross-references vector knowledge bases, and executes automated customer actions with audit trails.",
      tags: ["Python", "FastAPI", "Gemini API", "Vector DB", "Docker", "Redis"],
      metrics: "94% First-Response Resolution • < 800ms Avg Latency",
      imageGrad: "linear-gradient(135deg, #1e1e38 0%, #0f172a 100%)",
      icon: "bot",
      demoUrl: "https://example.com/demo/resolveai",
      githubUrl: "https://github.com/example/resolveai",
      features: [
        "Multi-agent task decomposition and routing",
        "Deterministic fallbacks and human-in-the-loop escalation triggers",
        "Asynchronous event queue with Redis Streams",
        "Comprehensive Prometheus metrics and OpenTelemetry tracing"
      ]
    },
    {
      id: "hyper-cloud-canvas",
      title: "NexusFlow - Distributed Workflow Engine",
      category: "fullstack",
      featured: true,
      tagline: "Visual DAG workflow builder and distributed task runner for modern data pipelines.",
      description: "A drag-and-drop reactive workspace empowering engineering teams to construct, orchestrate, and observe fault-tolerant background data flows with live node telemetry.",
      tags: ["TypeScript", "React", "Node.js", "WebSockets", "PostgreSQL", "Kafka"],
      metrics: "10k+ Tasks/sec • Real-time Canvas Rendering",
      imageGrad: "linear-gradient(135deg, #182848 0%, #4b6cb7 100%)",
      icon: "workflow",
      demoUrl: "https://example.com/demo/nexusflow",
      githubUrl: "https://github.com/example/nexusflow",
      features: [
        "Interactive canvas with custom topological sorting and cyclic dependency detection",
        "Bidirectional WebSocket streaming for zero-latency execution logs",
        "Role-based access control (RBAC) and audit log encryption",
        "Zero-downtime rolling node worker updates"
      ]
    },
    {
      id: "crypto-sentinel",
      title: "SentinAI - Real-Time Anomaly & Security Radar",
      category: "ai",
      featured: true,
      tagline: "Predictive threat detection using unsupervised streaming analytics and LLM vulnerability triage.",
      description: "High-throughput security monitor that flags anomalous network traffic patterns, correlates CVE threat vectors, and synthesizes instant executive remediation briefs.",
      tags: ["Python", "PyTorch", "FastAPI", "Grafana", "ElasticSearch", "Tailscale"],
      metrics: "99.8% Anomaly Catch Rate • Zero False Positive Spam",
      imageGrad: "linear-gradient(135deg, #2b1055 0%, #7597de 100%)",
      icon: "shield",
      demoUrl: "https://example.com/demo/sentinai",
      githubUrl: "https://github.com/example/sentinai",
      features: [
        "Streaming multivariate outlier detection using isolation forests and autoencoders",
        "Automated post-incident report generation via prompt pipelines",
        "Slack, PagerDuty, and Discord webhook integration suites"
      ]
    },
    {
      id: "hyperion-commerce",
      title: "Aura Commerce - Ultra-Fast Headless Storefront",
      category: "fullstack",
      featured: false,
      tagline: "Sub-second e-commerce engine with edge caching, localized currency, and dynamic cart syncing.",
      description: "A modern storefront built for blistering performance with serverless edge handlers, instantaneous micro-animations, and fluid checkout flows.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Stripe API", "Vercel Edge"],
      metrics: "100 Lighthouse Performance • 50ms Edge TTFB",
      imageGrad: "linear-gradient(135deg, #0d324d 0%, #7f5a83 100%)",
      icon: "cart",
      demoUrl: "https://example.com/demo/aura",
      githubUrl: "https://github.com/example/aura",
      features: [
        "Dynamic cart synchronization with optimistic UI updates",
        "Integrated payment gateways via Stripe & Apple Pay",
        "Automated image transformations and progressive blur placeholders"
      ]
    },
    {
      id: "kube-pulse",
      title: "KubePulse - Cluster Mesh Visualizer & SRE Hub",
      category: "cloud",
      featured: false,
      tagline: "Interactive 3D Kubernetes cluster topology viewer with live resource saturation maps.",
      description: "A developer tool that renders dynamic Kubernetes deployments, pods, and ingress routing meshes in an intuitive visual canvas with live health checks.",
      tags: ["Go", "Kubernetes API", "React", "Three.js", "Prometheus"],
      metrics: "Sub-50ms sync • Supports 500+ microservice nodes",
      imageGrad: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
      icon: "server",
      demoUrl: "https://example.com/demo/kubepulse",
      githubUrl: "https://github.com/example/kubepulse",
      features: [
        "Interactive 3D cluster topology visualization",
        "Instant one-click pod log streaming and terminal shell attach",
        "Automated cost anomaly notifications for idle node pools"
      ]
    },
    {
      id: "sol-vault",
      title: "AetherVault - Decentralized Asset Escrow",
      category: "cloud",
      featured: false,
      tagline: "Smart contract multi-sig escrow with time-locked execution and biometric signature gating.",
      description: "Secure, audited decentralized treasury vault with configurable quorum thresholds, gas-optimized settlement paths, and dispute mediation protocols.",
      tags: ["Solidity", "Rust", "Web3.js", "TypeScript", "Hardhat"],
      metrics: "$12M+ Simulated TVL • 100% Test Coverage",
      imageGrad: "linear-gradient(135deg, #20002c 0%, #cbb4d4 100%)",
      icon: "lock",
      demoUrl: "https://example.com/demo/aethervault",
      githubUrl: "https://github.com/example/aethervault",
      features: [
        "Formal verification of re-entrancy and arithmetic safety",
        "Hardware wallet (Ledger / Trezor) protocol compliance",
        "Zero gas waste via compressed calldata structures"
      ]
    }
  ],

  timeline: [
    {
      period: "2023 - Present",
      role: "Lead Systems & AI Solutions Architect",
      company: "Apex Innovations",
      description: "Spearheaded the development of multi-agent LLM systems and distributed event pipelines. Mentored engineering teams, reduced cloud computing overhead by 38%, and scaled customer support automation handling over 50,000 monthly queries.",
      skills: ["Agentic AI", "FastAPI", "AWS ECS", "Microservices", "PostgreSQL"]
    },
    {
      period: "2021 - 2023",
      role: "Senior Full-Stack Engineer",
      company: "Cognitive Labs",
      description: "Designed responsive SaaS dashboards, architected high-concurrency GraphQL endpoints, and established automated end-to-end testing suites. Increased platform uptime from 99.2% to 99.98%.",
      skills: ["React", "TypeScript", "Node.js", "Docker", "GraphQL", "Redis"]
    },
    {
      period: "2019 - 2021",
      role: "Software Engineer",
      company: "Veloce Technologies",
      description: "Built scalable consumer web apps and microservices. Implemented real-time messaging layers using WebSockets, optimized SQL query plans, and streamlined developer onboarding.",
      skills: ["JavaScript", "Python", "Django", "PostgreSQL", "Docker"]
    }
  ],

  testimonials: [
    {
      name: "Evelyn Reed",
      role: "VP of Engineering at TechVanguard",
      quote: "Sammy consistently operates at the highest echelon of engineering talent. Whether resolving gnarly concurrency bottlenecks or designing intuitive user experiences, his execution is second to none.",
      avatar: "ER"
    },
    {
      name: "Marcus Vance",
      role: "Founder & CEO, Horizon Dynamics",
      quote: "Working with Sammy transformed our product velocity. He took our AI prototype and turned it into an enterprise-grade platform in record time. A rare engineer who cares deeply about both code quality and product craft.",
      avatar: "MV"
    },
    {
      name: "Sophia Chen",
      role: "Principal Product Designer, Studio Orbit",
      quote: "Collaborating with Sammy as a designer is pure joy. He bridges the design-engineering divide effortlessly, bringing micro-interactions and animations to life with exquisite precision.",
      avatar: "SC"
    }
  ],

  cliCommands: {
    help: "Available commands: 'skills', 'projects', 'experience', 'contact', 'stats', 'clear', 'sudo hire'",
    skills: "Frontend: React, TypeScript, Vue, Modern CSS\nBackend: Python, FastAPI, Node.js, PostgreSQL\nAI: LLMs, LangChain, RAG, Vector DBs\nDevOps: Docker, K8s, AWS, CI/CD",
    projects: "Featured: ResolveAI (Autonomous Support), NexusFlow (Workflow Canvas), SentinAI (Anomaly Radar)",
    experience: "5+ years shipping high-performance systems from startups to high-growth tech enterprises.",
    contact: "Email: sammy.developer@example.com | Available for contracts & full-time leadership.",
    stats: "35+ Projects Shipped | 5+ Yrs Exp | 1,800+ Commits | 99.98% Uptime Architecture",
    sudo: "Access Granted! Scheduling interview pipeline... Sammy is ready to connect!"
  }
};
