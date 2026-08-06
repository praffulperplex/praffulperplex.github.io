export const profile = {
  name: 'Prafful Kumar Singh',
  role: 'Senior Software Engineer (Full Stack)',
  tagline:
    'Node.js · TypeScript · AWS · Serverless · Microservices · System Design',
  location: 'Chandigarh, India · Open to relocation',
  summary:
    '5+ years building scalable, cloud-native backends — REST APIs, event-driven microservices, and HIPAA/GDPR-compliant healthcare platforms.',
  email: 'praffulkumarsingh08@gmail.com',
  linkedin: 'https://linkedin.com/in/praffulks08051996',
  github: 'https://github.com/praffulperplex',
  resumePdf: '/resume.pdf',
}

export const about = {
  paragraphs: [
    'Senior Software Engineer with deep experience designing cloud-native applications using Node.js, TypeScript, AWS, and serverless architecture.',
    'I build RESTful APIs, event-driven microservices, and distributed systems — including secure healthcare platforms compliant with HIPAA and GDPR.',
    'Hands-on across AWS Lambda, API Gateway, DynamoDB, SQS, SNS, Step Functions, CloudWatch, IAM, EC2, and RDS. I also ship React UIs and use Python for automation and API work.',
    'I collaborate across teams, mentor engineers, drive technical decisions, and deliver with Agile practices.',
  ],
}

export const skillGroups = [
  {
    title: 'Backend & Cloud',
    items: [
      'Node.js + Python',
      'JavaScript (ES6+) / TypeScript',
      'REST API Design',
      'Microservices',
      'Serverless (Lambda, API Gateway)',
      'Event-Driven (SNS, SQS, Step Functions)',
      'Apache Kafka',
    ],
  },
  {
    title: 'DevOps & Data',
    items: [
      'Docker & Kubernetes',
      'CI/CD (GitHub Actions, Jenkins, CodePipeline)',
      'DynamoDB, MongoDB',
      'MySQL',
      'Data Modeling & Optimization',
      'EC2, RDS, S3, CloudWatch, IAM',
    ],
  },
  {
    title: 'Engineering',
    items: [
      'JWT / OAuth 2.0',
      'System Design & DSA',
      'Third-Party Integrations',
      'Appium / WebdriverIO / BDD',
      'React',
      'AI-Assisted Engineering',
      'Technical Mentorship',
    ],
  },
]

export const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Firminiq Systems Pvt Ltd',
    period: 'Aug 2024 – Present',
    bullets: [
      'Designed serverless backends with AWS Lambda and API Gateway',
      'Built secure REST APIs handling 10K+ requests/day, improving mobile and dashboard response time by ~30%',
      'Implemented event-driven workflows with SNS, SQS, and Step Functions — ~25% lower latency and higher reliability',
      'Optimized DynamoDB models; shipped OAuth 2.0 / JWT and RBAC',
      'Hardened APIs and pipelines for HIPAA and GDPR; CloudWatch monitoring and alerting',
      'Automated deploys with GitHub Actions, Jenkins, and AWS CodePipeline',
      'Maintained React web apps integrated with backend APIs',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'PoSist Technologies',
    period: 'Apr 2023 – Jan 2024',
    bullets: [
      'Designed SQL and NoSQL data models for scalable cloud POS integrations',
      'Built AWS Lambda hooks and APIs for push/pull data flows',
      'Structured handlers, CRUD, and business logic to reduce redundancy (DRY)',
      'Leveraged on-demand scaling; comprehensive API and SDK testing',
      'Managed documentation for databases, APIs, and integrations',
    ],
  },
  {
    title: 'Integrations / Backend',
    company: 'Rocket Media Technologies Pvt Ltd',
    period: 'Apr 2020 – Mar 2023',
    bullets: [
      'Third-party integrations: CardConnect, Pinelabs, DoorDash, Star Micronics printers, WhatsApp, Twilio, AWS SNS/SQS, Google Maps, Mapbox',
      'Built SDKs for UI integration; complex menu structures for diverse client configs',
      'Partnered with store managers and UI teams to improve workflows and API contracts',
      'Backend logic improvements, code optimization, and integration monitoring',
    ],
  },
]

export type ProjectLink = { label: string; href: string }

export type Project = {
  name: string
  description: string
  highlights: string[]
  tags: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    name: 'VitalSight — Remote Patient Monitoring',
    description:
      'Enterprise RPM platform for physicians monitoring hypertension patients via EMR integrations and web dashboards.',
    highlights: [
      'Node.js microservices for real-time healthcare data across regions',
      'Secure EMR REST integrations for clinician data exchange',
      'Alerting pipelines for abnormal vitals; HIPAA/GDPR compliance',
      'Enrollment, billing, and notification workflows',
    ],
    tags: ['Node.js', 'Microservices', 'Healthcare', 'HIPAA'],
  },
  {
    name: 'KIOSK Platform',
    description:
      'Cloud-based KIOSK backend for Middle East and Indian clients, built for scale and long-term extensibility.',
    highlights: [
      'Backend architecture from scratch with performant JS data structures',
      'Reusable helper libraries to speed integrations',
      'POS ecosystem sync and complex menu processing',
      'REST APIs co-designed with UI/UX teams',
    ],
    tags: ['JavaScript', 'Cloud', 'POS', 'APIs'],
  },
  {
    name: 'User Dashboard & Ecommerce',
    description:
      'Backend and integrations for US client web dashboards and ecommerce experiences.',
    highlights: [
      'Payments, delivery, printers, messaging, and maps integrations',
      'SDKs for cohesive UI integration',
      'API monitoring, documentation, and performance optimization',
    ],
    tags: ['Integrations', 'Ecommerce', 'Node.js'],
  },
  {
    name: 'DevFlow Board',
    description:
      'React 19 kanban showcase — Suspense, deferred search, Context, and modern React patterns.',
    highlights: [
      'Vite · React Router · localStorage mock API',
      'Compound tabs, portals, error boundaries, useTransition',
    ],
    tags: ['React', 'Vite', 'Frontend'],
    links: [{ label: 'GitHub', href: 'https://github.com/praffulperplex/react-skillboard' }],
  },
  {
    name: 'AI Chatbot API',
    description:
      'Python FastAPI chatbot with sessions, tool calling, SSE streaming, and mock mode.',
    highlights: [
      'OpenAI-compatible LLMs · SQLAlchemy async · Docker',
    ],
    tags: ['Python', 'FastAPI', 'AI'],
    links: [{ label: 'GitHub', href: 'https://github.com/praffulperplex/ai-chatbot-demo' }],
  },
  {
    name: 'Forge — SaaS Starter',
    description:
      'Full-stack SaaS foundation with NestJS, Prisma, Redis, JWT rotation, multi-tenancy, and RBAC.',
    highlights: [
      'Authenticated SPA ↔ API · OpenAPI · rate limiting · Docker Compose',
    ],
    tags: ['NestJS', 'PostgreSQL', 'Redis'],
    links: [{ label: 'GitHub', href: 'https://github.com/praffulperplex/saas-fullstack-forge' }],
  },
]

export const achievements = [
  'Rising Star Award — outstanding technical contributions and project delivery (Firminiq)',
  'Qualified IIT JEE Main examination in 2014 and 2015',
  'Improved backend reliability through monitoring and automated testing',
]

export const education = {
  degree: 'Bachelor of Technology — Computer Science and Engineering',
  school:
    'Feroze Gandhi Institute of Engineering and Technology (Government College — AKTU)',
  period: '2015 – 2019',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
