import Link from 'next/link';
import '../globals.css';

export const metadata = {
  title: 'Fit77',
  description: 'Generated by Next + Sanity',
};

const RootLayout = ({ children }) => (
  <html lang="uk">
    <body>
      <header>
        <Link href="/">
          Navbar
        </Link>
      </header>

      <main>
        {children}
      </main>

      <footer>
        Footer
      </footer>
    </body>
  </html>
);

export default RootLayout;
