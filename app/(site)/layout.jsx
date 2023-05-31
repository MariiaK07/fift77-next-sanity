import React from 'react';
import '../globals.css';
import './styles/main.scss';
import Header from './sections/header';
// import Footer from './sections/footer';
import { montserrat } from '../fonts';

export const metadata = {
  title: 'Fit77',
  description: 'Generated by Next + Sanity',
};

const RootLayout = ({ children }) => (
  <html
    lang="uk"
    className={montserrat.variable}
  >
    <body>
      <React.StrictMode>
        <Header />

        <main>
          {children}
        </main>

        {/* <Footer /> */}
      </React.StrictMode>
    </body>
  </html>
);

export default RootLayout;
