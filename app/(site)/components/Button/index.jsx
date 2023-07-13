import Link from 'next/link';

const Button = ({ type }) => (
  <Link
    href="https://www.instagram.com/fit77_fitness_studio/"
    target="_blank"
    className={type === 'color' ? 'button button--color' : 'button button--white'}
  >
    {type === 'color'
      ? ('Записатися на заняття')
      : <span className="button__text">Записатися на заняття</span>}
  </Link>
);

export default Button;
