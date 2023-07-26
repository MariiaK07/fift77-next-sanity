import classNames from 'classnames';

function HamburgerMenuButton({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={classNames('hamburger-menu-button', {
        'hamburger-menu-button--open': isMenuOpen,
      })}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      onKeyDown={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span />
      <span />
      <span />
    </div>
  );
}

export default HamburgerMenuButton;
