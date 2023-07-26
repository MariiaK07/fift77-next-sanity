import Link from 'next/link';

function DesktopMenu() {
  return (
    <nav className="menu">
      <Link
        href="#hero"
        className="menu__item"
      >
        Головна
      </Link>
      <Link
        href="#classes"
        className="menu__item"
      >
        Заняття
      </Link>
      <Link
        href="#schedule"
        className="menu__item"
      >
        Розклад
      </Link>
      <Link
        href="#price"
        className="menu__item"
      >
        Прайс
      </Link>
      <Link
        href="#trainers"
        className="menu__item"
      >
        Тренери
      </Link>
      <Link
        href="#contacts"
        className="menu__item"
      >
        Контакти
      </Link>
      <Link
        href="https://www.instagram.com/fit77_fitness_studio/"
        target="_blank"
        className="menu__item"
      >
        Instagram
      </Link>
    </nav>
  );
}

export default DesktopMenu;
