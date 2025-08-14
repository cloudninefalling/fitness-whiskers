import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/assets/scss/bundle.scss';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';

const RalewayBold = localFont({
    src: '../../public/fonts/raleway/Raleway-Bold.ttf',
    weight: '700',
    style: 'normal',
});

const RalewaySemibold = localFont({
    src: '../../public/fonts/raleway/Raleway-Semibold.ttf',
    weight: '600',
    style: 'normal',
});

const RalewayMedium = localFont({
    src: '../../public/fonts/raleway/Raleway-Medium.ttf',
    weight: '500',
    style: 'normal',
});

const Raleway = localFont({
    src: '../../public/fonts/raleway/Raleway-Regular.ttf',
    weight: '400',
    style: 'normal',
});

export const metadata: Metadata = {
    title: 'Fitness Whiskers',
    description: 'Самое пушистое приложение для фитнеса',
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    const fonts = [
        Raleway.className,
        RalewayBold.className,
        RalewaySemibold.className,
        RalewayMedium.className,
    ].join(' ');

    return (
        <html lang="ru">
            <body className={fonts}>
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}
