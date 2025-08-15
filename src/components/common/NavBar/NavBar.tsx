'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './NavBar.module.scss';
import { COLORS } from '@/assets/constants/colors';

type IProps = { className?: string };
type ILink = { label: string, href: string, accent?: boolean };

const LINKS = [
    {
        label: 'О нас',
        href: '/about',
    },
    {
        label: 'Дэшборд',
        href: '/dashboard',
    },
    {
        label: 'Тамаgoчи',
        href: '/tamagochi',
    },
    {
        label: 'Виды тренировок',
        href: '/training',
    },
    {
        label: 'Какой ты котик?',
        href: '/cat-quiz',
        accent: true,
    },
];

export default function NavBar({ className }: IProps) {
    const path = usePathname();

    const linkClasses = ({ href, accent }: ILink) => {
        const activeClass = path === href ? styles._active : '';

        const accentClass = accent ? styles._accent : '';

        return `${styles.link} ${activeClass} ${accentClass}`;
    };

    return (
        <nav className={`${styles.NavBar} ${className}`}>
            <ul className={styles.NavList}>
                {LINKS.map(link => <li key={link.href}>
                    <Link
                        href={link.href}
                        className={linkClasses(link)}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    >
                    </Link>
                </li>)}
            </ul>
        </nav>
    );
}
