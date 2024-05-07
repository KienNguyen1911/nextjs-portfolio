import {
    Inter, Roboto_Mono, Lusitana, Lobster
} from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// Roboto_Mono font
export const robotoMono = Roboto_Mono({ subsets: ['latin'] });

// Lusitana font
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const lobster = Lobster({
    weight: ['400'],
    subsets: ['latin'],
});