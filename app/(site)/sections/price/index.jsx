import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getPrices } from '@/sanity/sanity-utils';

const Price = async () => {
  const prices = await getPrices();

  return (
    <section id="price">
      <div className="container">
        <div className="price">
          <div className="price__units">
            {prices[0].units.map(price => (
              <div>
                {price.unit}
                <PortableText value={price.unitPrice} />
              </div>
            ))}
          </div>
          <div className="price__image-container">
            <Image
              src={prices[0].image}
              alt="Засновниця"
              width={496}
              height={460}
              className="price__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
