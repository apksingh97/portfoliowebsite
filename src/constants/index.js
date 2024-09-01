import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  controllerDashboard,
  userDashboard,
} from "../assets";

const link = [
  {
    title: "About",
    url: "/#about",
  },
  {
    title: "Contact Us",
    url: "/#contact",
  },
  {
    title: "PortFolio",
    url: "/portfolio",
  },
  {
    title: "Fun",
    url: "/fun",
  },
];
const newLink = [
  {
    title: "About",
    url: "/new-home#about",
  },
  {
    title: "Experience",
    url: "/new-home#experience",
  },
  {
    title: "Work",
    url: "/new-home#work",
  },
  {
    title: "Contact Us",
    url: "/new-home#contact",
  },
];

const services = [
  {
    title: "Wordpress Developer",
    icon: web,
  },
  {
    title: "Fronted Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "WordPress developer (Intern) ",
    company_name: "Fabulous Media Pvt. Ltd.",
    icon: "FM",
    iconBg: "#383E56",
    date: "Feb 2019 - Aug 2019",
    points: [
      "Develop a website",
      "Debugged WordPress sites ",
      "Optimized WordPress sites for performance",
    ],
  },
  {
    title: "WordPress developer",
    company_name: "Fabulous Media Pvt. Ltd.",
    icon: "FM",
    iconBg: "#E6DEDD",
    date: "Sep 2019 - March 2020",
    points: [
      "Worked with clients to develop a website",
      "Debugged WordPress sites ",
      "Optimized WordPress sites for performance",
      "Migrated WordPress sites to new hosting providers",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Freelancer",
    icon: "FR",
    iconBg: "#383E56",
    date: "May 2020 - dec 2020",
    points: [
      "Worked with clients to develop a website",
      "Debugged WordPress sites ",
      "Optimized WordPress sites for performance",
      "Migrated WordPress sites to new hosting providers",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Scizers IOT Pvt. ltd.",
    icon: "SC",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Aug 2021",
    points: [
      "Worked with clients to develop a website",
      "Debugged WordPress sites ",
      "Optimized WordPress sites for performance",
      "Migrated WordPress sites to new hosting providers",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Elgoss Pvt. ltd.",
    icon: "EL",
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Present",
    points: [
      " Designed and built user-friendly frontend interfaces",
      "Optimized frontend code to improve website performance",
      "Collaborated with back-end developers to integrate frontend code with application logic",
      "Wrote code to implement visual elements into web applications",
      "Engaged with users to gather feedback and resolve frontend issues",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "User Permissions",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },

      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: controllerDashboard,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Service",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: userDashboard,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  link,
  newLink,
};
