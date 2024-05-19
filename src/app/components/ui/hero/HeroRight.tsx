import {FC}from 'react';

import Image from 'next/image';

import styles from './Hero.module.scss';

const HeroRight: FC = () => {
    return (
      <section className={styles.hero_right}>
        <div className={styles.hero_right_wrap_img_first}>
          <Image 
            src='/sportsman_1.jpg'
            alt='HERO'
            priority
            width={500}
            height={500}
            className={styles.hero_right_img}
            />
        </div>
        <div className={styles.hero_right_wrap_img_second}>
          <Image 
            src='/sportsman_2.jpg'
            alt='HERO'
            priority
            width={500}
            height={500}
            className={styles.hero_right_img}
            />
        </div>
      </section>
    );
};

export default HeroRight; 