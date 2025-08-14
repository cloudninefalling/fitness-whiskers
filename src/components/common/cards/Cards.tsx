import { ICard, ICardVariant } from '@/assets/types/types';
import { Card } from 'antd';

import styles from '@/components/common/cards/Cards.module.scss';

type IProps = {
    cards: ICard[];
    variant?: ICardVariant;
    isCentered: boolean;
}

export default function Cards({ cards, variant, isCentered }: IProps) {
    const cardsClasses = [
        styles.cards,
        isCentered? styles._centered : '',
    ].join(' ');

    return (
        <div className={cardsClasses}>
            {cards.map((card: ICard) => <Card 
                className={styles.card} 
                title={card.title} 
                key={card.id} 
                variant={variant}
            >
                {card.content || ''}
            </Card>)}
        </div>
    );
}
