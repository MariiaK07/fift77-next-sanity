'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerMenuButton from '../../components/HamburgerMenuButton';
import MobileMenu from '../../components/MobileMenu';
import DesktopMenu from '../../components/DesktopMenu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="header">
          <Link
            href="#hero"
            className="header__logo"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logo.svg"
              alt="Fit77"
              priority
              width={86}
              height={38}
            />
          </Link>

          <DesktopMenu />

          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          <HamburgerMenuButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
