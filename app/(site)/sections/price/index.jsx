import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getPrices } from '@/sanity/sanity-utils';
import Button from '../../components/Button';

const Price = async () => {
  const prices = await getPrices();

  return (
    <section id="price">
      <div className="container">
        <div className="price">
          <div className="price__units">
            {prices[0].units.map(price => (
              <div
                key={price.unit}
                className="price__unit"
              >
                <p className="price__unit-title">{price.unit}</p>
                <div className="price__unit-price">
                  <PortableText value={price.unitPrice} />
                </div>
              </div>
            ))}
          </div>
          <div className="price__image-container">
            <Image
              src={prices[0].image}
              alt="Засновниця"
              width={496}
              height={460}
            />
          </div>
          <div className="price__button">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
