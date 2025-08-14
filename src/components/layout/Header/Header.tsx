import Image from 'next/image';

import NavBar from '@/components/layout/NavBar/NavBar';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                src="/images/chihuahua-logo.jpg"
                alt="Логотип"
                width={48}
                height={48}
                className={styles.headerImage}
            />

            <div className={styles.content}>
                <NavBar className={styles.nav} />
            </div>
        </header>
    );
}
