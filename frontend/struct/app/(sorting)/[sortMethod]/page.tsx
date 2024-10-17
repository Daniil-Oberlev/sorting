"use client";

import Layout from "@/components/layout";
import SortVisualizer from "@/components/template/SortVisualizer";
import sortConfig from "@/config/sortConfig";
import data from "@/texts/data.json";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import styles from "./page.module.scss";

const SortPage = () => {
  const { sortMethod } = useParams<{ sortMethod: string }>();

  if (!(sortMethod in sortConfig)) {
    notFound();
  }

  const config = sortConfig[sortMethod as keyof typeof sortConfig];

  const languageLinks = data[sortMethod as keyof typeof data]?.language;

  return (
    <>
      <Layout.Header title={config.title} />
      <SortVisualizer sortStepFunction={config.step} initialCount={50} />

      <Layout.Aside
        description={config.description}
        worst={config.complexity.worst}
        best={config.complexity.best}
        average={config.complexity.average}
      />

      {languageLinks && (
        <article>
          <h3>Реализации на различных языках:</h3>
          <ul className={styles.icon__container}>
            {Object.entries(languageLinks).map(([language, link]) => (
              <li key={language} className={styles.icon__block}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={`/images/${language.toLowerCase()}.svg`}
                    alt={`${language} icon`}
                    width={75}
                    height={75}
                  />
                </a>
              </li>
            ))}
          </ul>
        </article>
      )}
    </>
  );
};

export default SortPage;
