import { SPORT_TYPES } from '@/assets/constants/sport-types';

export const steps = [
    {
        id: 1,
        question: 'Какой темп работы тебе ближе?',
        answers: [
            {
                label: '🐢 Медленный и осознанный',
                values: [SPORT_TYPES.yoga],
            },
            {
                label: '🐆 Быстрый и энергичный',
                values: [SPORT_TYPES.martial_arts, SPORT_TYPES.crossfit],
            },
            { 
                label: '🐺 Чередую: то спринт, то растяжка',
                values: [SPORT_TYPES.functional_training, SPORT_TYPES.martial_arts], 
            },
        ],
    },
    {
        id: 2,
        question: 'Что важнее в тренировке?',
        answers: [
            {
                label: '💪 Сила и выносливость',
                values: [SPORT_TYPES.martial_arts, SPORT_TYPES.crossfit],
            },
            {
                label: '🧘 Гибкость и расслабление',
                values: [SPORT_TYPES.yoga],
            },
            { 
                label: '🎯 Результат + удовольствие',
                values: [SPORT_TYPES.functional_training, SPORT_TYPES.yoga], 
            },
        ],
    },
    {
        id: 3,
        question: 'Твоё отношение к боли в мышцах после тренировки?',
        answers: [
            {
                label: '😍 Обожаю, значит, поработал хорошо!',
                values: [SPORT_TYPES.martial_arts, SPORT_TYPES.crossfit],
            },
            {
                label: '😬 Терплю, но не фанат',
                values: [SPORT_TYPES.functional_training],
            },
            { 
                label: '😱 Не могу терпеть, хочу тренироваться без дискомфорта',
                values: [SPORT_TYPES.yoga], 
            },
        ],
    },
    {
        id: 4,
        question: 'Где тебе комфортнее заниматься?',
        answers: [
            {
                label: '🏠 Дома (коврик, гаджеты)',
                values: [SPORT_TYPES.yoga],
            },
            {
                label: '🏋️‍♂️ В зале (тренажёры, железо)',
                values: [SPORT_TYPES.crossfit, SPORT_TYPES.martial_arts],
            },
            { 
                label: '🌳 На улице (парк, бег, турники)',
                values: [SPORT_TYPES.functional_training, SPORT_TYPES.yoga], 
            },
        ],
    },
    {
        id: 5,
        question: 'Как часто готов тренироваться?',
        answers: [
            {
                label: '🐌 1-2 раза в неделю',
                values: [SPORT_TYPES.crossfit],
            },
            {
                label: '🐕 3-4 раза',
                values: [SPORT_TYPES.martial_arts, SPORT_TYPES.functional_training],
            },
            { 
                label: '🦁 5+ раз',
                values: [SPORT_TYPES.functional_training, SPORT_TYPES.yoga], 
            },
        ],
    },
    {
        id: 6,
        question: 'Твой главный фитнес-страх?',
        answers: [
            {
                label: '😨 Травмы',
                values: [SPORT_TYPES.yoga, SPORT_TYPES.functional_training],
            },
            {
                label: '🥱 Скука на тренировке',
                values: [SPORT_TYPES.functional_training, SPORT_TYPES.martial_arts],
            },
            { 
                label: '😤 Отсутствие прогресса',
                values: [SPORT_TYPES.crossfit, SPORT_TYPES.martial_arts], 
            },
        ],
    },
    {
        id: 7,
        question: 'Какой образ тебе ближе?',
        answers: [
            {
                label: '🐈 Грациозная пантера',
                values: [SPORT_TYPES.yoga, SPORT_TYPES.functional_training],
            },
            {
                label: '🦁 Мощный лев',
                values: [SPORT_TYPES.crossfit, SPORT_TYPES.martial_arts],
            },
            { 
                label: '🐯 Непоколебимый тигр',
                values: [SPORT_TYPES.martial_arts], 
            },
        ],
    },
    {
        id: 8,
        question: 'Что мотивирует тебя больше всего?',
        answers: [
            {
                label: '🏆 Чёткие цели (похудеть, подкачаться)',
                values: [SPORT_TYPES.crossfit, SPORT_TYPES.functional_training],
            },
            {
                label: '🎵 Кайф от движения (танцы, игра)',
                values: [SPORT_TYPES.functional_training],
            },
            { 
                label: '😼 Вызов себе («А смогу ли я?»)',
                values: [SPORT_TYPES.martial_arts], 
            },
        ],
    },
    {
        id: 9,
        question: 'Твоё тело после идеальной тренировки?',
        answers: [
            {
                label: '🔥 Горячие мышцы, приятная усталость',
                values: [SPORT_TYPES.martial_arts, SPORT_TYPES.crossfit],
            },
            {
                label: '☁️ Лёгкость, как после массажа',
                values: [SPORT_TYPES.yoga],
            },
            { 
                label: '⚡ Прилив энергии, хочется ещё!',
                values: [SPORT_TYPES.functional_training], 
            },
        ],
    },
    {
        id: 3,
        question: 'Как бы ты себя описал?',
        answers: [
            {
                label: '😸 Домашний любимец (люблю комфорт и мягкость)',
                values: [SPORT_TYPES.yoga],
            },
            {
                label: '🐆 Дикий хищник (каждый день бросаю себе вызов)',
                values: [SPORT_TYPES.martial_arts, SPORT_TYPES.crossfit],
            },
            { 
                label: '🦁 Царь зверей (стремлюсь быть лучшей версией себя)',
                values: [SPORT_TYPES.crossfit, SPORT_TYPES.functional_training], 
            },
        ],
    },
];

export const results = {
    [SPORT_TYPES.yoga]: {
        title: 'Ваш тотемный кот — Йога-Кот "Саджха"!',
        catDescription: 'Саджха — белоснежный гималайский кот, свободное время проводящий в размышлениях в позе лотоса. Его движения плавные, как танец, а взгляд умиротворённый, но слегка снисходительный (ведь он знает, что вы пока не можете коснуться лбом колен).', 
        fitnessDescription: 'Саджха — ваш персональный гуру-котик. Он терпеливо направляет вас в асанах, мурлычет во время медитации и мягко "поправляет" хвостом, если вы сутулитесь. Его философия: «Гибкость — не в спине, а в сознании». Если ленитесь — он просто усаживается вам на грудь в позе «кошка-корова» и смотрит... пока вам не станет стыдно.',
        quote: '«Шавасана? Да ты просто хочешь вздремнуть!» 😼🧘',
    },
    [SPORT_TYPES.martial_arts]: {
        title: 'Ваш тотемный кот — Кроссфит-Кот "Танк"!',
        catDescription: 'Танк — коренастый рыжий мейн-кун с мощной шеей и взглядом «я сожгу эту тренировку». На лапах — мини-версии кроссфит-перчаток, а на хвосте — татуировка «No Pain — No Gain».',
        fitnessDescription: 'Танк — ваш тренер-садист с пушистой мордой. Он не верит в «немножко потренироваться» — только в «сдохнуть, но сделать». Будет орать «ЕЩЁ!» во время берпи, подбадривать лаем (да, он умеет) при становой тяге и презрительно фыркать, если вы бросили гирю раньше времени. Его девиз: «Если не рычишь от усилий — значит, халтуришь». После тренировки может «случайно» уронить на вас штангу… для мотивации.',
        quote: '«Ты называешь это планкой? Мой котёнок дольше стоит у миски!» 😾🔥',
    },
    [SPORT_TYPES.crossfit]: {
        title: 'Ваш тотемный кот — Функциональный кот "Дэш"!',
        catDescription: 'Дэш — поджарый серый бенгальский кот с полосатыми лапами и взглядом, полным азарта. На нём — мини-версия спортивного жилета с кармашками для снарядов, а в зубах — эспандер (он его не выпускает никогда).',
        fitnessDescription: 'Дэш — ваш тренер по функционалке, который превратит любую тренировку в полосу препятствий. Он заставит вас прыгать через «ящики» (точнее, через себя), балансировать на одной лапе с гирей и бегать с санками, как будто за вами гонится собака. Его философия: «Если не упал — значит, не старался». Он не признаёт скучных повторений — только взрывные связки и вызовы. А если вы замешкались — он бросит в вас мягким мячиком. Для «разгона».',
        quote: '«Мои усы чувствуют твою лень за километр!» 📡🐾',
    },
    [SPORT_TYPES.functional_training]: {
        title: 'Ваш тотемный кот — Боевой Кот "Хао"!',
        catDescription: 'Хао — гибкий черно-белый кот с пронзительным желтым взглядом, в кимоно с закатанными рукавами. На лапах — обмотки как у настоящего бойца, а за поясом — деревянный тренировочный нож (для устрашения).',
        fitnessDescription: 'Хао — ваш безжалостный сенсей с пушистыми лапами. Он научит вас бить точнее, блокировать жёстче и двигаться тише, чем падающий лист. Его тренировки — это не просто удары, а философия: «Если противник увидел твою атаку — ты уже проиграл». Он будет атаковать вас из темноты, тренируя реакцию, заставит отрабатывать удары на груше... которую сам же и держит (и периодически уворачивается, чтобы вы промахнулись). А если вы замешкаетесь — получите лапой в лоб. По-дружески.',
        quote: '«Если твой удар не слышно в соседнем районе — это не удар, а поглаживание!» 💥🐱',
    },
};
