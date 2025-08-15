export type ICardVariant = 'borderless' | 'outlined' | undefined;

export type ICard = {
    title: string,
    variant?: ICardVariant,
    id: number,
    content: string,
    href?: string,
}
