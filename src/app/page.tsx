import Link from 'next/link';

import styles from './page.module.scss';

export default function HomePage() {
    return (
        <div className={styles.HomePage}>
            <div>Hello world</div>

            <Link
                href="/test"
                className="link"
            >
                Go to test
            </Link>
        </div>
    );
}
