import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getHero } from '@/sanity/sanity-utils';
import { playfair_display } from '../../../fonts';

const Hero = async () => {
  const hero = await getHero();

  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero__main">
            <div className="hero__main-left flex-40">
              <h1 className={`${playfair_display.variable} title hero__main-title`}>
                <span>Твоя</span>
                <span>Фітнес</span>
                <span>Студія</span>
              </h1>

              <div>
                <p className="hero__main-description">
                  {hero[0].description}
                </p>

                <p className="hero__main-address">
                  {hero[0].address}
                </p>
              </div>

            </div>

            <div className="flex-60">
              <div className="hero__main-image-container">
                <Image
                  src={hero[0].heroImage}
                  alt="hero"
                  width={718}
                  height={530}
                  className="hero__main-image"
                />
              </div>
            </div>
          </div>

          <div className="hero__intro">
            <div className="flex-40">
              <div className="hero__intro-image-container">
                <Image
                  src={hero[0].introImage}
                  alt="founder"
                  width={400}
                  height={540}
                  className="hero__intro-image"
                />
              </div>
            </div>

            <div className="flex-60">
              <div className="hero__intro-text">
                <h3 className={`${playfair_display.variable} title hero__intro-title`}>
                  {hero[0].introTitle}
                </h3>
                <div className="hero__intro-details">
                  <PortableText value={hero[0].introDetails} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
