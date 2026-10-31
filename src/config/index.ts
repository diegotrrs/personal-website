import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Diego Torres — Tech Lead & Software Engineer",
  author: "Diego Torres",
  description:
    "Tech Lead and Software Engineer based in London, UK. I design and build scalable, event-driven APIs with TypeScript and AWS.",
  lang: "en",
  siteLogo: "/diego-small.jpg",
  navLinks: [
    { text: "Experience", href: "/#experience" },
    { text: "Stack", href: "/#stack" },
    { text: "Education", href: "/#education" },
    { text: "About", href: "/#about" },
    { text: "Contact", href: "/#contact" },
    { text: "Blog", href: "/blog" },
    { text: "Resume", href: "/resume" },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/diego-torres-arguedas",
    },
    { text: "Github", href: "https://github.com/diegotrrs" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Diego Torres",
    specialty: "Tech Lead & Software Engineer",
    summary:
      "Software Engineer with experience across startups and larger companies, working across backend, frontend and mobile development, as well as technical leadership. Currently focused on building scalable backend systems in TypeScript on AWS, with extensive API integration experience. Builds with AI agents across the development lifecycle, shipping faster while maintaining good engineering practices.",
    resumeSummary:
      "Software Engineer with experience across startups and larger companies, working across backend, frontend and mobile development, as well as technical leadership. Currently focused on building scalable backend systems in TypeScript on AWS, with extensive API integration experience. Builds with AI agents across the development lifecycle, shipping faster while maintaining good engineering practices.",
    email: "diego.torres.arguedas@gmail.com",
  },
  experience: [
    {
      company: "Strategic Imperatives",
      position: "Tech Lead",
      startDate: "Nov 2023",
      endDate: "Present",
      url: "https://imperatives.co.uk/about/",
      textLinks: { "Fibre Café": "https://www.thefibrecafe.net/the-gateway/" },
      summary: [
        "Technical Lead for Fibre Café, a single unified API gateway that connects UK internet service providers to multiple fibre networks.",
        "Lead and mentor a team of engineers, setting technical direction and code quality standards through code reviews, pairing and design discussions.",
        "Design and build scalable, event-driven APIs in TypeScript on AWS (Lambda, SQS, SNS, DynamoDB).",
        "Work directly with suppliers and wholesale clients (e.g. CityFibre, PXC) to define API behaviour and requirements for new integrations.",
        "Apply agentic software development practices, using AI coding agents (e.g. Claude Code) to speed up delivery, code reviews and documentation.",
        "Platform processes ~4M service availability checks, 10K orders, 100K events sent and 170K events received per month.",
      ],
    },
    {
      company: "Weaver Build",
      position: "Senior Fullstack Engineer",
      startDate: "Dec 2021",
      endDate: "Jul 2023",
      url: "https://weaver-build.webflow.io/",
      summary: [
        "Founding member of the tech team.",
        "Designed and implemented the real-time messaging module within Weaver’s mobile app using TypeScript, Ionic/Capacitor, React, Ably Realtime, GraphQL and AWS infrastructure.",
        "Worked with OpenAI’s APIs, enabling users to generate messages using content from their prior projects, chat history and personal data.",
      ],
    },
    {
      company: "Leaf Grow (Leaf Music)",
      position: "Tech Lead / Senior Software Engineer",
      startDate: "Sept 2015",
      endDate: "Dec 2021",
      url: "https://www.leafgrow.io/",
      summary: [
        "Founding member of the tech team and tech lead for Leaf Grow’s backend projects using Django and Python.",
        "Managed a team of 5, overseeing performance, mentoring and project delivery.",
        "Implemented Leaf Grow’s web app using React and TypeScript.",
        "Defined best practices such as internal coding standards, Continuous Integration and Continuous Deployment.",
        "Built the Leaf Music Android app from scratch using Java, and led development of Leaf Music’s backend using Firebase and TypeScript.",
      ],
    },
    {
      company: "Desert Development",
      position: "Senior Software Engineer",
      startDate: "Oct 2012",
      endDate: "Sept 2015",
      summary: [
        "Developed online games using C++ and JavaScript, e.g. Count Spectacular.",
        "Implemented internal tools using VB.NET.",
      ],
    },
    {
      company: "Possible Worldwide",
      position: "Senior Software Engineer",
      startDate: "Mar 2011",
      endDate: "Oct 2012",
      url: "https://www.thatispossible.com/",
      summary: "Developed web and Android projects, e.g. All Recipes.",
    },
    {
      company: "Desert Development",
      position: "Software Engineer",
      startDate: "Nov 2009",
      endDate: "Dec 2010",
      summary: "Developed casino games using C++.",
    },
  ],
  projects: [
    {
      name: "CityFibre TMF Ethernet & FTTP integration into the Fibre Café",
      period: "2026 — Present",
      summary:
        "Led backend integration of CityFibre’s TM Forum Open APIs into Fibre Café, adding Ethernet and FTTP Wholesale Broadband. Built the event-driven AWS supplier connector (Lambda, SNS, SQS, DynamoDB) for availability, ordering, amendments, cancellations and faults. Worked direct with clients to agree API behaviour.",
    },
    {
      name: "Openreach & Vodafone integration into the Fibre Café",
      period: "2025 — Present",
      summary:
        "Led backend integration of BT Openreach and Vodafone APIs into the Fibre Café platform. Built supplier connectors supporting SOAP/REST communication, OAuth2 and mTLS authentication, and event-driven processing with AWS Lambda, SNS and SQS.",
    },
    {
      name: "Weaver’s Matching API",
      period: "Feb 2023 — Jul 2023",
      summary:
        "A REST API that pairs contractors with construction projects, generating a recommended list of contractors for each project for the Ops team’s dashboard. Contractors are ranked by a cumulative score derived from individual attributes, each evaluated through formulas stored in a database. Built with Node.js and Express, hosted on Heroku.",
    },
    {
      name: "Weaver’s Messaging module",
      period: "Jan 2022 — Feb 2023",
      summary:
        "Real-time communication between contractors, homeowners and architects in Weaver’s hybrid construction management app: attachments, unread indicators, push notifications and project lifecycle actions, built with React, TypeScript, AWS Lambda, DynamoDB and CDK, with Ably WebSockets and Pub/Sub. Also an OpenAI API integration that rewrote user messages using LiquidJS prompt templates and project/user context.",
    },
    {
      name: "Leaf Grow’s projects",
      period: "2019 — 2021",
      summary:
        "Backend development for Leaf Music’s pivot into marketing technology: a platform for managing Facebook advertising campaigns. Contributed to two Python/Django services, one providing core CRUD for the web app and another using Celery background jobs to process insights data from the rate-limited Facebook Marketing API.",
    },
    {
      name: "Leaf Music’s backend and Android app",
      period: "2016 — 2019",
      summary:
        "A music discovery platform using the YouTube API to let users listen to music and create and share playlists. I built the Android app from scratch in Java; it reached close to 1 million downloads and 330k monthly active users. The backend was an Express REST API on Node.js within a Firebase project on Google Cloud.",
    },
  ],
  stack: [
    {
      category: "Languages",
      items: ["TypeScript", "Python", "Java", "C++"],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "Django",
        "Celery",
        "REST APIs",
        "GraphQL",
        "Open API",
        "WebSockets",
        "OAuth2",
      ],
    },
    {
      category: "AWS",
      items: [
        "Lambda",
        "API Gateway",
        "SQS",
        "SNS",
        "DynamoDB",
        "Cognito",
        "ECS/ECR",
        "ElastiCache",
        "S3",
        "OpenSearch",
      ],
    },
    {
      category: "Architecture",
      items: [
        "Systems Design",
        "Event-driven architectures",
        "Pub/Sub",
        "Real-time messaging (Ably)",
      ],
    },
    {
      category: "AI & LLM",
      items: ["OpenAI API"],
    },
    {
      category: "Data",
      items: ["PostgreSQL", "DynamoDB", "Firestore"],
    },
    {
      category: "Frontend & Mobile",
      items: ["React", "Next.js", "Ionic / Capacitor", "Android (Java)"],
    },
    {
      category: "Infra & DevOps",
      items: [
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "Google Cloud / Firebase",
        "Digital Ocean",
      ],
    },
    {
      category: "Testing",
      items: ["Jest", "React Testing Library", "Playwright", "TDD"],
    },
  ],
  education: [
    {
      institution: "University of Costa Rica",
      degree: "Master’s Degree in Computer Science",
      summary:
        "Final project: “Effect of the number of colors and the distance measure on the similarity between image correlograms”.",
    },
    {
      institution: "University of Costa Rica",
      degree: "Bachelor’s Degree in Computer Science",
    },
  ],
  about: {
    description: `
      Hi there, I’m Diego 👋🏽, and I like building software.

      I’m a Tech Lead and Software Engineer originally from Costa Rica and now based in London. I’ve worked in startups and larger companies in both countries, often as a founding member of the tech team.

      These days I lead the Fibre Café team at Strategic Imperatives, designing event-driven APIs with TypeScript and AWS and mentoring the engineers I work with. Over the years I’ve built everything from backend services and real-time messaging to web apps and an Android app that reached close to a million downloads.

      Other interests include tennis, video games, comedy and meditation.
    `,
    image: "/diego-big.jpg",
  },
};

// #5755ff
