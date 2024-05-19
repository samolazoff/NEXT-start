import { FC } from "react";
import Link from "next/link";

import styles from './Navbar.module.scss';
import { menu } from "./menu.data";
import NavItem from "./NavItem";

const Navbar: FC  = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_wrap}>
                <Link href='/'>
                    <h1 className={styles.logo}>ECommerce</h1>
                </Link>
            </div>
            <nav className={styles.header_nav}>
                {
                    menu.map(item => (
                        <NavItem key={item.link} item={item}/>
                    ))
                }
            </nav>
        </header>
    );
};

export default Navbar;