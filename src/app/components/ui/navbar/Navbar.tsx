import { FC } from "react";
import Link from "next/link";

import styles from './Navbar.module.scss';

const Navbar: FC  = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_wrap}>
                <Link href='/'>
                    <h1 className={styles.logo}>ECommerce</h1>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;