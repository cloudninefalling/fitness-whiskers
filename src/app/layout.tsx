import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/assets/scss/bundle.scss';

// import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';

const Raleway = localFont({
    src: [
        { 
            path: '../../public/fonts/raleway/Raleway-Regular.ttf',
            weight: '400',
            style: 'normal', 
        },
        {
            path: '../../public/fonts/raleway/Raleway-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/raleway/Raleway-Semibold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/raleway/Raleway-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
});

export const metadata: Metadata = {
    title: 'Fitness Whiskers',
    description: 'Самое пушистое приложение для фитнеса',
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="ru">
            <body className={Raleway.className}>
                <Header />

                {children}

                {/* <Footer /> */}
            </body>
        </html>
    );
}
