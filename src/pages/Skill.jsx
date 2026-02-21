import styles from "../styles/Skills.module.css";
export default function Skills() {
  const backendSkills = [
    { name: "Java", level: 90 },
    { name: "JSP Servlet", level: 70 },
    { name: "Spring Boot", level: 85 },
    { name: "REST APIs", level: 88 },
    { name: "Microservices", level: 50 },
    { name: "JPA/Hibernate", level: 85 }
  ];

  const frontendSkills = [
    { name: "React", level: 82 },
    { name: "JavaScript", level: 85 },
    { name: "HTML5/CSS3", level: 90 },
    { name: "Bootstrap", level: 80 },
    { name: "Tailwind CSS", level: 70 },
    { name: "TypeScript", level: 70 },
    { name: "Angular", level: 70 }
  ];

  const databaseSkills = [
    { name: "MySQL", level: 87 },
    { name: "PostgreSQL", level: 50 },
    { name: "Firebase", level: 70 }
   
  ];

  const toolSkills = [
    "Git & GitHub", "Postman", "Maven","Sublime Text",
    "VS Code", "IntelliJ IDEA","Eclipse","Swagger"
  ];

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h3>Technical Skills</h3>
        
        <div className={styles.grid}>
          <div className={styles.skillCategory}>
            <h4>Backend Development</h4>
            {backendSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillInfo}>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progress} 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.skillCategory}>
            <h4>Frontend Development</h4>
            {frontendSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillInfo}>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progress} 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.skillCategory}>
            <h4>Database</h4>
            {databaseSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillInfo}>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progress} 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.skillCategory}>
            <h4>Tools & Technologies</h4>
            <div className={styles.toolsGrid}>
              {toolSkills.map((tool, index) => (
                <span key={index} className={styles.toolTag}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}