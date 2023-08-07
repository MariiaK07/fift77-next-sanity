import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Marquee from 'react-fast-marquee';
import { getPrices } from '@/sanity/sanity-utils';
import Button from '../../components/Button';
import MarqueeText from '../../components/MarqueeText';

async function Price() {
  const prices = await getPrices();

  return (
    <section id="price">
      <Marquee speed={100}>
        <MarqueeText text="price" />
      </Marquee>

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
              className="price__image"
            />
          </div>
          <div className="price__button">
            <Button type="color" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
