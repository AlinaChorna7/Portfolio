import { useState } from "react";
import styles from "./header.module.css";
 
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={styles.header}>
    

     
        <nav className={styles.nav}>
          <a href="#about">About me</a>
          <a href="#projects">My Projects</a>
          <a href="#contact">Contact me</a>
       
          
        </nav>

   
        <button className={styles.menuButton} onClick={toggleMenu}>
          <svg width="23px" height="23px" className={styles.menuIcon}>
            <use href="/images/icons.svg#icon-menu" />
          </svg>
        </button>
      </header>

    
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.open : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={toggleMenu}
        >
          <svg width="40px" height="40px" className={styles.closeHeader}>
            <use href="/images/icons.svg#icon-close" />
          </svg>
        </button>
        <nav className={styles.menuNav}>
          <a href="#about" className={styles.mobileMenuItem} onClick={toggleMenu}>
           About me
          </a>
          <a href="#projects" className={styles.mobileMenuItem}onClick={toggleMenu}>
            My projects
          </a>
          <a href="#contact" className={styles.mobileMenuItem} onClick={toggleMenu}>
            Contact me
          </a>
       
        </nav>
      </div>
    </>
  );
};

export default Header;