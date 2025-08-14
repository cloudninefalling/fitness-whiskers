import styles from './IndexHero.module.scss';

const IMAGE = `<img src="/svg/two-paws-bone.svg" class="${styles.svg}" />`;

const SLOGAN = `Пушистая мотивация <br> ${IMAGE} <span>на каждый день.</span>`;

export default function IndexHero() {
    return (
        <section className={`${styles.IndexHero} section container _1440`}>
            <p className={styles.slogan} dangerouslySetInnerHTML={{ __html: SLOGAN }} />
        </section>
    );
}
