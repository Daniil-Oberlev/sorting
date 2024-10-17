import { IHeader } from "@/interfaces/interface";
import { ArrowLeftToLine } from "lucide-react";
import Link from "next/link";
import styles from "./Header.module.scss";

export const Header: React.FC<IHeader & { showBackButton?: boolean }> = ({
  title,
  showBackButton = true,
}) => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__title}>{title}</h1>
        {showBackButton && (
          <Link href="/">
            {" "}
            <ArrowLeftToLine
              className={styles.header__icon}
              color="black"
              size={48}
            />
          </Link>
        )}
      </header>
    </>
  );
};
