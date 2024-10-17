import { GITHUB_URL } from "@/env";
import { Copyright, Github } from "lucide-react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = ({}) => {
  return (
    <footer className={styles.footer}>
      <a href={GITHUB_URL} className={styles.footer__link}>
        <Github />
        GitHub
      </a>
      <span className={styles.footer__copyright}>
        <Copyright />
        MADE BY OGOROD TEAM
      </span>
    </footer>
  );
};
