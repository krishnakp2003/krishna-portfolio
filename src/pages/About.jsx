import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h3>About Me</h3>
        
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a passionate Full Stack Java Developer with 1.5 years of 
              hands-on experience in building enterprise-level applications. 
              Currently working at TechSolutions Inc., where I lead backend 
              development for microservices architecture.
            </p>
            
            <p>
              My journey in software development started during my B.Tech in 
              Computer Science, where I discovered my love for solving complex 
              problems through clean, efficient code. Since then, I've worked 
              on diverse projects ranging from e-commerce platforms to 
              farming equipment rental systems.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.icon}>🎯</span>
                <span>Problem Solver</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon}>🚀</span>
                <span>Performance Optimizer</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon}>💡</span>
                <span>Clean Code Advocate</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon}>🤝</span>
                <span>Team Player</span>
              </div>
            </div>
          </div>

          <div className={styles.quickInfo}>
            <div className={styles.infoCard}>
              <h4>Education</h4>
              <p><strong>B.Tech Computer Science Engineering</strong></p>
              <p>SKITM Indore | 2022-2026</p>
              <p className={styles.grade}>CGPA: 7.2/10</p>
            </div>

            {/* <div className={styles.infoCard}>
              <h4>Certifications</h4>
              <ul>
                <li>✓ Oracle Certified Java Programmer</li>
                <li>✓ Spring Professional Certification</li>
                <li>✓ Meta Frontend Developer</li>
              </ul>
            </div> */}

            <div className={styles.infoCard}>
              <h4>Languages</h4>
              <ul>
                <li>✓ English (Professional)</li>
                <li>✓ Hindi (Native)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}