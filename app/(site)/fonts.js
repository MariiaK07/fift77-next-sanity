import { Montserrat, Playfair_Display } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
});

export const playfair_display = Playfair_Display({
  subsets: ['cyrillic'],
  variable: '--font-playfair-display',
});
