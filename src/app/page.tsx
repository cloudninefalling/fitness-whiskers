import styles from './page.module.scss';
import IndexHero from '@/components/pages/index/hero/IndexHero';


export default function HomePage() {
    return (
        <div className={styles.HomePage}>
            <IndexHero />
        </div>
    );
}
