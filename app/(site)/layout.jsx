import React from 'react';
import '../globals.css';
import './styles/main.scss';
import Header from './sections/header';
import Footer from './sections/footer';
import { montserrat } from './fonts';

export const metadata = {
  title: 'Fit77',
  description: 'Generated by Next + Sanity',
};

function RootLayout({ children }) {
  return (
    <html
      lang="uk"
      className={montserrat.variable}
    >
      <head>
        <title>Fit77 - твоя фітнес студія</title>
        <meta name="keywords" content="Fitness, Stretching, High Heels, стретчинг, табата, пілатес, хатха-йога, танці, танці для діток, дитячі танці, Фітнес, фітнес студія, спорт, спортзал, Чернівці, фіт77, фіт 77, Іванка Павлюк, фітнес тренер, фітнес тренер Чернівці, Іванка, Павлюк, Фітнес Чернівці, фіт77 фітнес студіо, fit77 фітнес студіо, fit77 фітнес студія, fit77, заняття спортом, заняття спортом в Чернівцях, спорт в Чернівцях, фітнес в Чернівцях, йога, йога в Чернівцях, фітнес в Чернівцях, хай хілс в Чернівцях, highheels в Чернівцях, стретчинг в Чернівцях, stretching в Чернівцях, табата в Чернівцях, пілатес в Чернівцях, танці в Чернівцях, танці для діток в Чернівцях, дитячі танці в Чернівцях, фітнес студії в Чернівцях, фітнес студія в Чернівцях, фітнес студії Чернівців, Воробкевича, м. Чернівці, фітнес студія Fit77, ivasha77, ivasha, Chernivtsi, sport" />
        <meta name="description" content="Fit77 - твоя фітнес студія. Затишна, інстаграмна студія для спорту та танців в Чернівцях. У FIT77 ми: пропонуємо тренування різних напрямків; розробляємо індивідуальні тренувальні програми; забезпечуємо професійним обладнанням; створюємо комфортну атмосферу." />
        <meta name="author" content="Іванка Павлюк" />
      </head>
      <body>
        <React.StrictMode>
          <Header />

          <main>
            {children}
          </main>

          <Footer />
        </React.StrictMode>
      </body>
    </html>
  );
}

export default RootLayout;
