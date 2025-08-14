import styles from './IndexHero.module.scss';

const SLOGAN = 'Пушистая мотивация <br> <span>на каждый день.</span>';

export default function IndexHero() {
    return (
        <section className={`${styles.IndexHero} section container _1440`}>
            <p className={styles.slogan} dangerouslySetInnerHTML={{ __html: SLOGAN }} />
        </section>
    );
}
