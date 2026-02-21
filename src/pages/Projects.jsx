import styles from "../styles/Projects.module.css";
export default function Projects() {
  const projects = [
    {
      title: "AgriMachHub",
      description: "A comprehensive farming equipment rental platform connecting farmers with equipment owners. Features real-time availability, and GPS tracking.",
      tech: ["Spring Boot", "MySQL", "React", "Redux", "JWT"],
      features: [
        "Real-time equipment availability",
        "GPS tracking for equipment",
        "Rating and review system"
      ],
      github: "https://github.com/krishna/agrimachhub",
      live: "https://agrimachhub.com",
      duration: "3 months",
      role: "Lead Developer"
    },
   {
  title: "SkillMate – Local Skilled Workers Platform",
  description: "A location-based service platform that connects local skilled workers with users. The system helps workers get digital visibility while enabling users to easily find trusted services nearby.",
  tech: ["Angular 19", "Spring Boot", "REST API", "MySQL", "JWT"],
  features: [
    "Worker profile management with photo upload",
    "Document upload and verification support",
    "Service and pricing management by workers",
    "Location-based worker search and hiring",
    "Role-based access (User / Worker / Admin)"
  ],
  github: "https://github.com/krishna/talenthands",
  duration: "5 months",
  role: "Full Stack Developer"
},
   {
  title: "RadheShop – Online Bag Store",
  description: "An e-commerce web application for online bag shopping built using JSP and Servlet. The platform provides user and admin modules for managing products, orders, and customers.",
  tech: ["JSP", "Servlet", "Core Java", "MySQL","CSS", "Apache Tomcat"],
  features: [
    "User registration and login",
    "Bag product listing and details view",
    "Add to cart and checkout flow",
    "Admin panel for product management",
    "Order and stock management"
  ],
  github: "https://github.com/krishna/radheshop",
  duration: "3 months",
  role: "Java Backend Developer"
}
  ];

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h3>Featured Projects</h3>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h4>{project.title}</h4>
                <span className={styles.role}>{project.role}</span>
              </div>
              
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>

              <div className={styles.features}>
                <h5>Key Features:</h5>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.projectMeta}>
                <span className={styles.duration}>⏱️ {project.duration}</span>
              </div>

              {/* <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57 4.765-1.588 8.2-6.086 8.2-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}