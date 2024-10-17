import Layout from "@/components/layout";
import data from "@/texts/data.json";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Layout.Header
        title="Sorting algorithm visualizer"
        showBackButton={false}
      />
      <div className={styles.algorithm__container}>
        <Layout.Aside description="On this site you can see various sorting algorithms. By going to them, you can learn the principles of their work, complexity, consider the visualization and see their code in the most popular programming languages" />
        <ul className={styles.algorithm__list}>
          <li className={styles.algorithm__item}>
            <Link href="/bogo">{data.bogo.title}</Link>
          </li>
          <li className={styles.algorithm__item}>
            <Link href="/bubble">{data.bubble.title}</Link>
          </li>
          <li className={styles.algorithm__item}>
            <Link href="/binary_insertion">{data.binary_insertion.title}</Link>
          </li>
          <li className={styles.algorithm__item}>
            <Link href="/optimized_bubble">{data.optimized_bubble.title}</Link>
          </li>
          <li className={styles.algorithm__item}>
            <Link href="/exchange">{data.exchange.title}</Link>
          </li>
          <li className={styles.algorithm__item}>
            <Link href="/insertion">{data.insertion.title}</Link>
          </li>
          <li className={styles.algorithm__item}>
            <Link href="/quick">{data.quick.title}</Link>
          </li>
          <li className={styles.algorithm__item}>
            <Link href="/selection">{data.selection.title}</Link>
          </li>
          <li className={styles.algorithm__item}>
            <Link href="/shaker">{data.shaker.title}</Link>
          </li>
          <li className={styles.algorithm__item}>
            <Link href="/shell">{data.shell.title}</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
