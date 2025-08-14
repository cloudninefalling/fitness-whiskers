'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './NavBar.module.scss';

type IProps = { className?: string };

const LINKS = [
    {
        label: 'Главная',
        href: '/',
    },
    {
        label: 'Вторая страница',
        href: '/second-page',
    },
];

export default function NavBar({ className }: IProps) {
    const path = usePathname();

    const linkClasses = (href: string) => {
        const activeClass = path === href ? styles._active : '';

        return `${styles.link} ${activeClass}`;
    };

    return (
        <nav className={(styles.NavBar, className)}>
            <ul className={styles.NavList}>
                {LINKS.map(({ label, href }) => <li key={label}>
                    <Link
                        href={href}
                        className={linkClasses(href)}
                    >
                        {label}
                    </Link>
                </li>)}
            </ul>
        </nav>
    );
}
