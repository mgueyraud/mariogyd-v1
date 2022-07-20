import React from 'react'
import behanceLogo from "@assets/img/icons/behance-logo.svg";
import githubLogo from "@assets/img/icons/github.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
        <a
          href="https://github.com/mgueyraud/mariogyd"
          target="_blank"
          rel="noreferrer"
        >
          Built By Mario Gueyraud&nbsp;
          <Image src={githubLogo} alt="Behance Logo" />
        </a>
        <a
          href="https://www.behance.net/diegocamacho5/moodboards"
          target="_blank"
          rel="noreferrer"
        >
          Designed By Diego Camacho&nbsp;
          <Image src={behanceLogo} alt="Behance Logo" />
        </a>
    </footer>
  )
}

export default Footer;