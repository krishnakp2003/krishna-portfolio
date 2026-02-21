import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.greeting}>👋 Hello, I'm</span>
        <h1>Krishna Kumar Prajapati</h1>
        <h2>
          <span className={styles.typing}>Full Stack Java Developer</span>
        </h2>
        <p>
          I build scalable backend systems and modern web applications
          with clean architecture and long-term vision. 
          Specialized in Spring Boot ecosystem and React.js.
        </p>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1.5+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          {/* <div className={styles.statItem}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div> */}
        </div>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.primary}>View My Work →</a>
          <a href="https://1drv.ms/b/c/7b0377ccf8e0591d/IQBPOJBe5RddQak8dtQ5_0pwAXFfAdRCUQo41P5m3zj8DmY?e=6fEXRp" className={styles.secondary}>View Resume</a>
        </div>

        <div className={styles.socialLinks}>
          <a href="https://github.com/krishnakp2003/" target="_blank" rel="noopener noreferrer">
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="#ededed" stroke="#1c2a2c" strokeWidth="1">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/krishnaprajapati057/" target="_blank" rel="noopener noreferrer">
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="#0b5ea7" stroke="#80b5e3" strokeWidth="1">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="mailto:krishnakumarprajapati2003@gmail.com">
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="#e0b463" stroke="#c45f00" strokeWidth="1">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.backgroundGlow}></div>
    </section>
  );
}