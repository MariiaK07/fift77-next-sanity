import Link from 'next/link';
import classNames from 'classnames';

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={classNames('menu menu--mobile', {
        'menu--mobile-open': isMenuOpen,
      })}
    >
      <Link
        href="#hero"
        className="menu__item"
        onClick={closeMenu}
      >
        Головна
      </Link>
      <Link
        href="#classes"
        className="menu__item"
        onClick={closeMenu}
      >
        Заняття
      </Link>
      <Link
        href="#schedule"
        className="menu__item"
        onClick={closeMenu}
      >
        Розклад
      </Link>
      <Link
        href="#price"
        className="menu__item"
        onClick={closeMenu}
      >
        Прайс
      </Link>
      <Link
        href="#trainers"
        className="menu__item"
        onClick={closeMenu}
      >
        Тренери
      </Link>
      <Link
        href="#contacts"
        className="menu__item"
        onClick={closeMenu}
      >
        Контакти
      </Link>
      <Link
        href="https://www.instagram.com/fit77_fitness_studio/"
        target="_blank"
        className="menu__item"
        onClick={closeMenu}
      >
        Instagram
      </Link>
    </nav>
  );
}

export default MobileMenu;
