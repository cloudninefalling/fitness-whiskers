import NavBar from '@/components/layout/NavBar/NavBar';
import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo/HeaderLogo';

export default function Header() {
    return (
        <header className={styles.header}>
            <HeaderLogo />

            <div className={styles.content}>
                <NavBar className={styles.nav} />
            </div>

            <div></div>
        </header>
    );
}
