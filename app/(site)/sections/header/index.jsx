import Link from 'next/link';
import Image from 'next/image';

const Header = async () => (
  <header>
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Fit77"
        priority
        width={86}
        height={38}
      />
    </Link>
    <nav>
      <Link href="#hero">Головна</Link>
      <Link href="#classes">Заняття</Link>
      <Link href="#schedule">Розклад</Link>
      <Link href="#price">Прайс</Link>
      <Link href="#trainers">Тренери</Link>
      <Link href="#contacts">Контакти</Link>
      <Link
        href="https://www.instagram.com/fit77_fitness_studio/"
        target="_blank"
      >
        Instagram
      </Link>
    </nav>
  </header>
);

export default Header;
