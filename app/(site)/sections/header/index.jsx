'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [active, setActive] = useState('');

  const setActiveLink = () => {
    const observable = {
      hero: document.querySelector('#hero'),
      classes: document.querySelector('#classes'),
      schedule: document.querySelector('#schedule'),
      price: document.querySelector('#price'),
      trainers: document.querySelector('#trainers'),
      // contacts: document.querySelector('#contacts'),
    };

    const pos = {
      hero: observable.hero.getBoundingClientRect(),
      classes: observable.classes.getBoundingClientRect(),
      schedule: observable.schedule.getBoundingClientRect(),
      price: observable.price.getBoundingClientRect(),
      trainers: observable.trainers.getBoundingClientRect(),
      // contacts: observable.contacts.getBoundingClientRect(),
    };

    if (pos.hero.top < window.innerHeight && pos.hero.bottom >= 0) {
      setActive('hero');
    } else if (pos.classes.top < window.innerHeight && pos.classes.bottom >= 0) {
      setActive('classes');
    } else if (pos.schedule.top < window.innerHeight && pos.schedule.bottom >= 0) {
      setActive('schedule');
    } else if (pos.price.top < window.innerHeight && pos.price.bottom >= 0) {
      setActive('price');
    } else if (pos.trainers.top < window.innerHeight && pos.trainers.bottom >= 0) {
      setActive('trainers');
    // } else if (pos.contacts.top < window.innerHeight && pos.contacts.bottom >= 0) {
    //   setActive('contacts');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setActiveLink);

    return () => window.removeEventListener('scroll', setActiveLink);
  }, []);

  return (
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
