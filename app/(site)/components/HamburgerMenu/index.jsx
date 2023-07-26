import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`hamburger-menu ${isOpen ? 'hamburger-menu--open' : ''}`}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <span />
      <span />
      <span />
    </div>
  );
}

export default HamburgerMenu;
