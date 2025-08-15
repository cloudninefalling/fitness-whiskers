import { ICard, ICardVariant } from '@/assets/types/types';
import { Card } from 'antd';

import styles from '@/components/common/cards/Cards.module.scss';

type IProps = {
    cards: ICard[];
    variant?: ICardVariant;
    isCentered?: boolean;
    className?: string;
}

export default function Cards({ cards, variant = 'outlined', isCentered = false, className = '' }: IProps) {
    const cardsClasses = [
        styles.cards,
        isCentered? styles._centered : '',
        className,
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
