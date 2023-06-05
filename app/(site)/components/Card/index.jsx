import Image from 'next/image';

const Card = ({ item }) => (
  <div className="card">
    <Image
      src={item.image}
      alt={item.title}
      width={294}
      height={300}
      className="card__image"
    />
    <p className="card__description">
      {item.description}
    </p>
    <h3 className="card__title">
      {item.title}
    </h3>
  </div>
);

export default Card;
