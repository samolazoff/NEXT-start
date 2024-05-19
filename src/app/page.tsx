import type { Metadata } from "next";

import styles from './Home.module.scss';
import Hero from "./components/ui/hero/Hero";

export const metadata : Metadata = {
  title: 'Home page',
  description: 'Home page description'
}

export default function Home() {
  return (
    <section className={styles.home}>
      <Hero/>
    </section>
  );
}
