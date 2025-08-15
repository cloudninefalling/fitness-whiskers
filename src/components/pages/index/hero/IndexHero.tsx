import Cards from '@/components/common/cards/Cards';
import styles from './IndexHero.module.scss';
import { ICard } from '@/assets/types/types';

const IMAGE = `<img src="/svg/two-paws-bone.svg" class="${styles.svg}" />`;

const SLOGAN = `Пушистая мотивация <br> ${IMAGE} <span>на каждый день.</span>`;

const CARDS: ICard[] = [
    {
        title: 'Тест',
        id: 1,
        content: 'Тестовый текст',
    },
    {
        title: 'Тест',
        id: 2,
        content: 'Довольно длинный Тестовый текст',
    },
    {
        title: 'Тест',
        id: 3,
        content: 'Ну прямо неимоверный, нечеловечески длинный Тестовый текст',
    },
];

export default function IndexHero() {
    return (
        <section className={`${styles.IndexHero} section container _1440`}>
            <p className={styles.slogan} dangerouslySetInnerHTML={{ __html: SLOGAN }} />

            <Cards cards={CARDS} variant="borderless" isCentered />
        </section>
    );
}
