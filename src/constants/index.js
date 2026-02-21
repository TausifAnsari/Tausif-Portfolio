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
  TCS,
  TAMUSA,
  Crio,
  bootstrap,
  java,
  nextjs,
  python,
  sql,
  dotnet,
  azure,
  spring,
  csharp,
  mygithub,
  techshop,
  campus,
  fdoh
} from "../assets";

// template id - template_hyen908
// service id - service_ns5npt8
// public key - -MDAV3GcuBB10vGIS

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Full-Stack Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps",
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
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "C#",
    icon: csharp,
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
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const experiences = [
  {
    title: "Full Stack Web Application Developer",
    company_name: "Florida Department of Health",
    icon: fdoh,
    iconBg: "#FDFBFB",
    date: "August 2024 - present",
    points: [
      "Designed and developed scalable web applications using ASP.NET Core MVC, Web API, and React, enhancing performance and usability.",
      "Translated Figma designs into responsive, user-friendly web interfaces using React and TypeScript, ensuring seamless user experiences.",
      "Designed and optimized SQL Server databases, including complex stored procedures and query optimizations, reducing database query response times by 40%.",
      "Improved page load speeds by 35% by implementing lazy loading and dynamic bundling techniques.",
      // "Managed software build and release pipelines using Azure DevOps, ensuring seamless integration and automated deployments.",
      // "Deployed applications to both on-premises servers and cloud platforms using Azure App Services, ensuring high availability and scalability.",
      "Delivered HIPAA-compliant applications, safeguarding sensitive patient data and ensuring regulatory adherence.",
      "Integrated healthcare-specific APIs like FHIR and HL7, providing seamless interoperability across systems.",
      // "Ensured compliance with ADA standards by developing websites meeting WCAG guidelines, enabling accessibility for all users.",
      "Integrated CI/CD pipelines and implemented code quality checks using SonarQube, Veracode reducing deployment errors by 80%.",
      "Mentored junior developers in ASP.NET Core, React, and best practices, improving team productivity and code quality.",
      "Successfully launched a critical healthcare application in a compressed timeline, ensuring feature completeness and high quality.",
      // "Documented all production promotion requests, including detailed descriptions, impact assessments, and rollback plans, ensuring compliance with change management policies.",
      // "Collaborated with cross-functional teams to review and approve change requests before deployment."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Texas A&M University",
    icon: TAMUSA,
    iconBg: "#FDFBFB",
    date: "October 2022 - May 2024",
    points: [
      "Designed and developed a real-time location-tracking web application using ASP.NET, JavaScript, React.",
      "Integrated Google Maps JavaScript API and Google Maps Distance Matrix API to enhance the application's functionality.",
      "Containerized the web application using Docker, reducing environment setup time by nearly 80%.",
      "Designed and maintained SQL Server databases, ensuring data integrity, security, and optimal performance.",
      "Leveraged GIT for version control, ensuring effective change tracking and team collaboration, Created and developed continuous integration and delivery (CI/CD) pipelines using Jenkins, Azure DevOps.",
    ],
  },
  {
    title: "Software Engineer (Full-Stack Developer)",
    company_name: "Tata Consultancy Services",
    icon: TCS,
    iconBg: "#FFFFFF",
    date: "June 2021 - August 2022",
    points: [
      "Successfully developed and launched a new feature that increased user engagement by 30%",
      "Worked as analyzing, designing, proposing, and delivering solutions that are appropriate for the business and technology strategies. Worked on Spring MVC, ASP.NET Core MVC Architecture for web applications.",
      "Developed and maintained scalable and efficient web applications using Java, C#, Spring, Springboot, Hibernate, JPA, ASP.NET Core, Entity Framework Core, Javascript, React.",
      "Implemented Spring Boot caching mechanisms, resulting in a 32\% reduction in database queries for frequently accessed data.",
      "Implemented lazy loading for React components, resulting in a 24\% reduction in initial page load time for a data-intensive dashboard.",
      "Created and maintained database schemas using Hibernate, JPA, EF Core optimizing performance and ensuring data integrity. Used Hibernate and Entity Framewok Core ORM framework as persistence engine, configured O/R mapping.",
      "Implemented React functional components with Hooks to manage state, side effects, and context, ensuring a streamlined and efficient data flow within the application. Utilized Axios library to make asynchronous HTTP requests and handle API integration within React applications.",
      "Deployed and managed Azure App Service-based web apps and APIs with CI/CD, auto-scaling, and monitoring. Utilized Azure DevOps for agile CI/CD and Configured the build and deployment pipelines using Azure DevOps, contributing to an efficient and automated DevOps workflow.",
    ],
  },
  {
    title: "Student Developer Intern",
    company_name: "Crio.Do",
    icon: Crio,
    iconBg: "#2df7c5",
    date: "December 2019 - April 2020",
    points: [
      "Engineered a robust review mechanism leveraging Facebook, Pinterest, and Clarifai APIs, enhancing user interaction and experience within the food delivery application.",
      "Designed and implemented a secure file sharing platform, delving into new technologies such as shell scripting and computer networking to ensure top-notch data protection and seamless sharing capabilities.",
      "Actively contributed to the development and enhancement of real-world applications, gaining hands-on experience in solving practical challenges and implementing innovative solutions.",
      "Leveraged Java programming in conjunction with REST API to build scalable and efficient application.",
    ],
  }
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
    name: "TechShop",
    description:
      "An e-commerce platform designed to deliver customers an intuitive interface, personalized recommendations, ensuring a seamless online shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: techshop,
    source_code_link: "https://github.com/TausifAnsari/TechShop-Heroku",
  },
  {
    name: "Campus Dynamics",
    description:
      "An advanced ERP solution that empowers educational institutions with comprehensive features, delivering an efficient and user-friendly platform for Campus.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "SQlite",
        color: "pink-text-gradient",
      },
    ],
    image: campus,
    source_code_link: "https://github.com/TausifAnsari/Campus-Dynamics-Heroku",
  },
  {
    name: "My GitHub",
    description:
      "Delve into my GitHub portfolio, a compilation of projects that showcase my dedication to application development. Explore with me the realm of coding expertise and innovation.",
    tags: [
      {
        name: "code-portfolio",
        color: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",
      },
      {
        name: "open-source",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
    ],
    image: mygithub,
    source_code_link: "https://github.com/TausifAnsari"
  },
];

const resume = import.meta.env.VITE_RESUME;

export { services, technologies, experiences, testimonials, projects, resume };
