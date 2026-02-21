import { useEffect, useState } from "react";
import styles from "../styles/ScrollToTopArrow.module.css";
import { ChevronsUp } from "lucide-react";

const ScrollToTopArrow = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    show && (
      <button className={styles.arrow} onClick={scrollToTop}>
        <ChevronsUp size={40} strokeWidth={2.3} color="#368c6c" />
        
        
      </button>
    )
  );
};

export default ScrollToTopArrow;