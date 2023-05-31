'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState('');

  return (
    <header>
      <div className="container">
        <div className="header">
          <Link
            href="/"
            className="header__logo"
          >
            <Image
              src="/logo.svg"
              alt="Fit77"
              priority
              width={86}
              height={38}
            />
          </Link>
          <nav className="header__nav">
            <Link
              href="#hero"
              className={
                active === 'hero'
                  ? 'active header__nav-item'
                  : 'header__nav-item'
              }
              onClick={() => setActive('hero')}
            >
              Головна
            </Link>
            <Link
              href="#classes"
              className={
                active === 'classes'
                  ? 'active header__nav-item'
                  : 'header__nav-item'
              }
              onClick={() => setActive('classes')}
            >
              Заняття
            </Link>
            <Link
              href="#schedule"
              className={
                active === 'schedule'
                  ? 'active header__nav-item'
                  : 'header__nav-item'
              }
              onClick={() => setActive('schedule')}
            >
              Розклад
            </Link>
            <Link
              href="#price"
              className={
                active === 'price'
                  ? 'active header__nav-item'
                  : 'header__nav-item'
              }
              onClick={() => setActive('price')}
            >
              Прайс
            </Link>
            <Link
              href="#trainers"
              className={
                active === 'trainers'
                  ? 'active header__nav-item'
                  : 'header__nav-item'
              }
              onClick={() => setActive('trainers')}
            >
              Тренери
            </Link>
            <Link
              href="#contacts"
              className={
                active === 'contacts'
                  ? 'active header__nav-item'
                  : 'header__nav-item'
              }
              onClick={() => setActive('contacts')}
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
};

export default Header;
