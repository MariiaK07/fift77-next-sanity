import Image from 'next/image';
import { playfair_display } from '../../fonts';

const Card = ({ item }) => (
  <div className="card">
    <div className="card__image-container">
      <Image
        src={item.image}
        alt={item.title}
        width={294}
        height={300}
        className="card__image"
      />
      <div className="card__description">
        <p>{item.description}</p>
      </div>
    </div>
    <h3 className={`${playfair_display.variable} title card__title`}>
      {item.title}
    </h3>
  </div>
);

export default Card;
