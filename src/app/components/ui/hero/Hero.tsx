import {FC}from 'react';

import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

import styles from './Hero.module.scss';

const Hero: FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.wrap}>
                <HeroLeft/>
                <HeroRight/>
            </div>
        </section>
    );
};

export default Hero;