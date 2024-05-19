import {FC}from 'react';

import styles from './Hero.module.scss';

const HeroLeft: FC = () => {
    return (
        <section className={styles.hero_left}>
          <h2 className={styles.hero_left_title}>
            Top Fashion for a top price
          </h2>
          <p className={styles.hero_left_txt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum velit nulla, aliquam dolorum tempore facere ducimus accusantium nemo! Minima dolorem alias error aspernatur!
          </p>
        </section>
    );
};

export default HeroLeft;