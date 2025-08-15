'use client';
import { ICard, ICardVariant } from '@/assets/types/types';
import { Card } from 'antd';

import styles from '@/components/common/cards/Cards.module.scss';
import Link from 'next/link';
import React from 'react';
import { Url } from 'next/dist/shared/lib/router/router';

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
            {cards.map((card: ICard) => {
                const Wrapper = card.href ? Link : React.Fragment;

                return <Wrapper key={card.id} href={card.href as Url} className={styles.wrapper}>
                    <Card 
                        className={styles.card} 
                        title={card.title} 
                        variant={variant}
                    >
                        {card.content || ''}
                    </Card>
                </Wrapper>;
            })}
        </div>
    );
}
