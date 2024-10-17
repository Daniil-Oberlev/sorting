import { IAside } from "@/interfaces/interface";
import styles from "./Aside.module.scss";

export const Aside: React.FC<IAside> = ({
  description,
  worst,
  best,
  average,
}) => {
  return (
    <>
      <aside className={styles.aside}>
        <article className={styles.aside__description}>
          <p>{description}</p>
        </article>
        {worst && best && average && (
          <article className={styles.aside__description}>
            <ul>
              <li>worst: {worst}</li>
              <li>best: {best}</li>
              <li>average: {average}</li>
            </ul>
          </article>
        )}
      </aside>
    </>
  );
};
