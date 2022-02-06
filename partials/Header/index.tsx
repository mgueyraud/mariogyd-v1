import React from "react";
import styles from "@styles/partials/Header.module.css";
import Image from "next/image";
import { Button, Layout } from "@components";
import logo from "@assets/img/icons/logo.svg";
import hamburger from "@assets/img/icons/hamburger.svg";
import closeIcon from "@assets/img/icons/close-icon.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Layout>
        <div className={styles.header__content}>
          <Image src={logo} alt="Logo Image" width="54" height="54" />
          {isOpen ? (
            <div
              className={styles.header__dropshadow}
              onClick={() => setIsOpen(false)}
            />
          ) : null}
          <nav
            className={`${styles.header__navbar} ${
              isOpen ? styles["-is-open"] : ""
            }`}
          >
            <div className={styles.header__navbar_close_icon}>
              <Image
                src={closeIcon}
                alt="Close Menu Icon"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <ol>
              <li>
                <a href="#about-me">
                  <span>01.</span>About me
                </a>
              </li>
              <li>
                <a href="#experience">
                  <span>02.</span>Experience
                </a>
              </li>
              <li>
                <a href="#work">
                  <span>03.</span>Work
                </a>
              </li>
              <li>
                <a href="#articles">
                  <span>04.</span>Articles
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span>05.</span>Contact
                </a>
              </li>
            </ol>
          </nav>
          <Button variant="outline">Resume</Button>
          <div
            className={styles.header__hamburger}
            onClick={() => setIsOpen(true)}
          >
            <Image src={hamburger} alt="Hamburger Menu" />
          </div>
        </div>
      </Layout>
    </header>
  );
};

export default Header;
