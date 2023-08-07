import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/Button';

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <Link href="#hero" className="footer__logo">
            <Image
              src="/logo-transparent.svg"
              alt="Fit77"
              priority
              width={223}
              height={98}
            />
          </Link>

          <p className="footer__copyright">
            &#169;FITT 77 - фітнес студія. 2021
          </p>

          <div className="footer__cta">
            <Button type="white" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
