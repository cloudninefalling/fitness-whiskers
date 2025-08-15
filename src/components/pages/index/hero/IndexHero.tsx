import Cards from '@/components/common/cards/Cards';
import styles from './IndexHero.module.scss';
import { ICard } from '@/assets/types/types';

const IMAGE = `<img src="/svg/two-paws-bone.svg" class="${styles.svg}" />`;

const SLOGAN = `Пушистая мотивация <br> <span>на каждый день</span> ${IMAGE}`;

const CARDS: ICard[] = [
    {
        title: 'Двигайся к цели с\xA0ушастым\xA0сенсеем',
        id: 2,
        content: 'Наш дотошный виртуальный кот следит за\xA0каждым кусочком: одобрительно мурлычет на\xA0полезную еду и\xA0бьёт лапкой по\xA0лишним калориям. С\xA0ним твой дневник питания\xA0— как игра в\xA0«кошки-мышки» с\xA0пользой для фигуры!',
        href: '/calorie-tracker',
    },
    {
        title: 'Шагай навстречу пушистому\xA0счастью',
        id: 1,
        content: 'Чем больше шагов ты\xA0делаешь, тем счастливее твой виртуальный котик! Ленишься\xA0— он\xA0хмурится, идешь к\xA0цели\xA0— мурлычет и\xA0дарит подарки. Хочешь порадовать кота? Тогда вперёд, на\xA0прогулку! 🐾',
        href: '/tamagochi',
    },
    {
        title: 'Услышь наставление усатого\xA0оракула',
        id: 3,
        content: 'Пройди опрос и\xA0узнай своё тотемное фитнес-животное! Йога в\xA0стиле плюшевого котика? Или кроссфит, как гепард? Узнаешь за\xA02\xA0минуты! 😼',
        href: '/your-totem-cat',
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
