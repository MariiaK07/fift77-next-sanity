'use client';

import Link from 'next/link';
import Image from 'next/image';
// import HamburgerMenu from '../../components/HamburgerMenu';

const Header = () => (
  <header>
    <div className="container">
      <div className="header">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Fit77"
            priority
            width={86}
            height={38}
            className="header__logo"
          />
        </Link>

        {/* <HamburgerMenu /> */}

        <nav className="header__nav">
          <Link
            href="#hero"
            className="header__nav-item"
          >
            Головна
          </Link>
          <Link
            href="#classes"
            className="header__nav-item"
          >
            Заняття
          </Link>
          <Link
            href="#schedule"
            className="header__nav-item"
          >
            Розклад
          </Link>
          <Link
            href="#price"
            className="header__nav-item"
          >
            Прайс
          </Link>
          <Link
            href="#trainers"
            className="header__nav-item"
          >
            Тренери
          </Link>
          <Link
            href="#contacts"
            className="header__nav-item"
          >
            Контакти
          </Link>
          <Link
            href="https://www.instagram.com/fit77_fitness_studio/"
            target="_blank"
            className="header__nav-item"
          >
            Instagram
          </Link>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
