import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`hamburger-menu ${isOpen ? 'open' : ''}`}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </div>
  );
};

export default HamburgerMenu;
