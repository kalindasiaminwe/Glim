import { Merriweather, Inter, Playfair, Dancing_Script } from 'next/font/google';

// fonts.ts or your font file
import localFont from 'next/font/local';

export const myFont = localFont({
  src: '../../public/fonts/PerandorySemiCondensed.otf',
  display: 'swap',
  weight: '400',
  variable: '--font-myfont',
});


export const dancing = Dancing_Script({
    subsets: ['latin'],
    weight: ["400", "700"]

});

export const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ["400", "700"]

});

export const inter = Inter({
    subsets: ['latin'],
    weight: ["400", "700"]

});

export const playfair = Playfair({
    subsets: ['latin'],
    weight: ["400", "700"]

});