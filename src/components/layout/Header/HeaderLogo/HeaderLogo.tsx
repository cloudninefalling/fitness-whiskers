import Link from 'next/link';
import styles from './HeaderLogo.module.scss';

const TITLE = '<span>F</span>itness <span>W</span>hiskers';

export default function HeaderLogo() {
    return (
        <div className={styles.HeaderLogo}>
            <Link 
                href="/" 
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: TITLE }}    
            />
        </div>
    );
}
