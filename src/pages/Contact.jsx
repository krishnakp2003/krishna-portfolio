import { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h3>Let's Connect</h3>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <p className={styles.intro}>
              I'm always interested in hearing about new opportunities,
              tech discussions, or just having a chat over coffee ☕
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:krishnakumarprajapati2003@gmail.com">
                    krishnakumarprajapati2003@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>📱</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+917049651579">+91 7049651579</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Indore, India (Open to Remote)</p>
                </div>
              </div>
            </div>

            <div className={styles.availability}>
              <h4>Availability</h4>
              <p>🟢 Open to work and collaborations</p>
              <p>⏰ Response time: Within 24 hours</p>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h4>Send me a message</h4>

            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or opportunity..."
                rows="5"
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
              <span className={styles.sendIcon}>→</span>
            </button>
          </form>
        </div>

        <div className={styles.socialSection}>
          <h4>Find me on</h4>
          <div className={styles.socialLinks}>
            <a href="https://github.com/krishnakp2003/" target="_blank" rel="noopener noreferrer">
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="#474545">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/krishnaprajapati057/" target="_blank" rel="noopener noreferrer">
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="#0549af">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://www.facebook.com/share/16LrEhAHAy/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                fill="#0549af"
              >
                <path d="M22 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.764v2.315h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}