'use client';

import {FC} from 'react';
import { IMenuItem } from './menu.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'clsx';

import styles from './Navbar.module.scss';

interface INavItem {
    item: IMenuItem
};

const NavItem: FC<INavItem> = ({item}) => {
    const pathname = usePathname();
    const base = styles.nav_item;

    return (
        <div>
            <Link href={item.link} 
                className= {cn(base,
                pathname === item.link ? 'text-violet-600': 'text-gray-600')}
            >
                {item.name}
            </Link>
        </div>
    );
};

export default NavItem;