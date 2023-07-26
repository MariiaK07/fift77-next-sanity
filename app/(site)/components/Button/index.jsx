import Link from 'next/link';
import classNames from 'classnames';

function Button({ type }) {
  return (
    <Link
      href="https://www.instagram.com/fit77_fitness_studio/"
      target="_blank"
      className={classNames('button', {
        'button--color': type === 'color',
        'button--white': type === 'white',
      })}
    >
      {type === 'color'
        ? ('Записатися на заняття')
        : <span className="button__text">Записатися на заняття</span>}
    </Link>
  );
}

export default Button;
