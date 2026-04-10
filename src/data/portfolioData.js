export const profile = {
  fullName: "Aubin Aron",
  role: "Backend Developer",
  location: "France",
  phone: "+33 6 12 34 56 78",
  email: "aubin@example.com",
  photo: "/profile.jpg",
  cvUrl: "#",
  linkedinUrl: "https://www.linkedin.com/in/aron-aubin-43b13028a/",
  githubUrl: "https://github.com/aubintene",
  whatsappUrl: "https://wa.me/33612345678",
  reelLogoText: "JUSTICE AUBIN"
};

export const quickLinks = [
  {
    name: "GitHub",
    href: "https://github.com/aubintene",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/justice-aubin-tene-tene-635a79261/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
  },
  {
    name: "Download CV",
    href: "#",
    icon: "https://img.icons8.com/fluency/48/downloads-folder.png"
  },
  {
    name: "Telephone",
    href: "tel:+33612345678",
    icon: "https://img.icons8.com/fluency/48/phone.png"
  }
];

export const stats = [
  { label: "ans d'experience", value: "0" },
  { label: "projets livres", value: "0" },
  { label: "clients satisfaits", value: "0%" }
];

export const skills = [
  {
    category: "Langages",
    items: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Hono.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hono/hono-original.svg" }
    ]
  },
  {
    category: "Bases de donnees",
    items: [
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ]
  },

  {
    category: "Outils",
    items: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ]
  }
];

export const projects = [
  {
    name: "Scholaris - Site EPFPS",
    description: "J'ai participé en tant que développeur backend à la réalisation de cette plateforme dédiée à l'école EPFPS (Formqsions en santé Universite à Meiganga) avec une interface moderne et claire.",
  stack: "Node.js, Hono.js, TypeScript, PostgreSQL",
    type: "Entreprise",
    problem:
      "Donner a l'etablissement une vitrine web professionnelle, lisible sur mobile et orientee conversion.",
    solution:
      "Mise en avant des filieres, CTA d'admission visibles, sections institutionnelles completes et navigation simple.",
    image: "/scholaris-preview.png",
    
    live: "https://scholaris-six.vercel.app/"
  },
  {
    name: "API de gestion scolaire",
    description:
      "Backend complet pour la gestion des eleves, notes et emplois du temps avec authentification JWT.",
    stack: "Node.js, Express, PostgreSQL",
    type: "Freelance",
    problem:
      "Centraliser les donnees d'un etablissement qui utilisait des fichiers disperses.",
    solution:
      "Architecture REST, gestion des roles, tableau de bord et export PDF.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    github: "#",
    live: "#"
  },
  {
    name: "Portfolio developpeur",
    description: "Site personnel moderne optimise pour la conversion et le SEO.",
    stack: "Vue.js, Tailwind CSS, Vite",
    type: "Personnel",
    problem: "Presenter mes competences de facon claire et professionnelle.",
    solution: "Design premium, sections ciblees, UX fluide et responsive.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    github: "#",
    live: "#"
  },
  {
    name: "Dashboard ventes",
    description:
      "Interface d'analyse commerciale avec filtres dynamiques et visualisations KPI.",
    stack: "Vue.js, Chart.js, Firebase",
    type: "Open Source",
    problem: "Donner une vue rapide de la performance commerciale en temps reel.",
    solution: "Composants reutilisables, graphiques interactifs et alertes automatiques.",
    image: "https://images.unsplash.com/photo-1551281044-8b0a0c2f2f8d?auto=format&fit=crop&w=1200&q=80",
    github: "#",
    live: "#"
  }
];

export const experiences = [
  {
    date: "2025 - Aujourd'hui",
    title: "Backend Developer - Freelance",
    details:
      "Conception d'APIs, optimisation SQL, mise en production Docker et accompagnement client."
  },
  {
    date: "2023 - 2025",
    title: "Developpeur Full Stack - Alternance",
    details:
      "Developpement de fonctionnalites metier, maintenance applicative et integration continue."
  },
  {
    date: "2022 - 2023",
    title: "Formation developpement web",
    details:
      "Parcours intensif JavaScript, architectures web, tests et bonnes pratiques UI/UX."
  }
];

export const posts = [
  {
    title: "Comment structurer une API Node.js propre",
    excerpt: "Architecture modulaire, validation des donnees et gestion des erreurs.",
    url: "#"
  },
  {
    title: "Optimiser les performances SQL sans casser la lisibilite",
    excerpt: "Index utiles, plans d'execution et bonnes pratiques de requetage.",
    url: "#"
  },
  {
    title: "Mon process pour livrer un projet freelance",
    excerpt: "De la phase de cadrage a la mise en production continue.",
    url: "#"
  }
];
