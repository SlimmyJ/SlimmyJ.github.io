export const profile = {
  name: 'Simon Van Tittelboom',
  role: '.NET / C# Developer',
  tagline:
    'I build clean, well-tested software — and enjoy the puzzle of turning nothing into something that works.',
  location: 'Ghent, Belgium',
  email: 'simon.van.tittelboom@gmail.com',
  resume: '/Simon-Van-Tittelboom-CV.pdf',
  available: true,
}

export const social = [
  { label: 'GitHub', href: 'https://github.com/slimmyj', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/simonvantittelboom', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:simon.van.tittelboom@gmail.com', icon: 'mail' },
]

export const about = [
  'Bitten by code and held hostage by the debugger. After years on the operational side of a construction firm, I retrained as a .NET developer because building something from nothing felt completely natural.',
  'I care about clean code, test-driven development and continuously learning. I am the people person in a room full of engineers.',
]

export const facts = [
  { label: 'Location', value: 'Ghent, Belgium' },
  { label: 'Focus', value: 'Backend / .NET' },
  { label: 'Languages', value: 'Dutch · English' },
  { label: 'Freelance', value: 'Available' },
]

export const services = [
  {
    icon: 'server',
    title: 'Backend Development',
    text: 'APIs and services in C# / .NET — designed to be readable, testable and maintainable.',
  },
  {
    icon: 'code',
    title: 'Web Development',
    text: 'TypeScript, modern JavaScript and ASP.NET MVC / Web API for end-to-end features.',
  },
  {
    icon: 'check',
    title: 'Clean Code & TDD',
    text: 'Test-Driven Development and SOLID principles, applied pragmatically rather than dogmatically.',
  },
  {
    icon: 'database',
    title: 'Data & Databases',
    text: 'SQL and Entity Framework — modelling data and querying it efficiently.',
  },
]

export const skills = [
  'C#', '.NET', 'ASP.NET MVC', 'Web API', 'Entity Framework',
  'WPF / WinForms', 'TypeScript', 'JavaScript', 'SQL',
  'TDD', 'SOLID', 'Agile / Scrum', 'HTML & CSS',
]

export const experience = [
  {
    title: '.NET Developer',
    org: 'Building backend services & web apps',
    period: '2021 — Present',
    points: [
      'Designing and building C# / .NET APIs and services with a focus on clean, testable code.',
      'Working across the stack with ASP.NET, Entity Framework and TypeScript front-ends.',
      'Applying TDD, SOLID and Agile practices day to day.',
    ],
  },
  {
    title: 'Administrative & Logistics Officer',
    org: 'Aclagro nv',
    period: '2013 — 2020',
    points: [
      'Planning, permits and scheduling for road-signage crews.',
      'Coordinated transport, maintenance and logistics of site units and equipment.',
      'Managed the depot and soil-remediation centre; handled sampling and external audits.',
    ],
  },
]

export const education = [
  {
    title: '.NET / C# Developer',
    org: 'VDAB · Multimedi · Obelisk',
    period: '2020 — 2021',
    points: [
      'OOP, Test-Driven Development, SOLID, Scrum.',
      'C#, .NET, ASP.NET MVC, Entity Framework, Web API, WPF.',
      'SQL, JavaScript, HTML & CSS.',
    ],
  },
  {
    title: 'Bachelor of Psychology',
    org: 'Universiteit Gent',
    period: '2010 — 2014',
    points: [],
  },
  {
    title: 'Secondary — Economics & Modern Languages',
    org: 'OLV College Zottegem',
    period: '2005 — 2010',
    points: [],
  },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'What I Do' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]
