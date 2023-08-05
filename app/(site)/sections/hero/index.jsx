import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getHero } from '@/sanity/sanity-utils';
import { playfair_display } from '../../fonts';
import Button from '../../components/Button';

async function Hero() {
  const hero = await getHero();

  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero__main">
            <div className="hero__main-left">
              <div className={`${playfair_display.variable} title hero__main-title`}>
                <h1>Твоя</h1>
                <h1>Фітнес</h1>
                <h1>Студія</h1>
              </div>

              <div>
                <p className="hero__main-description">
                  {hero[0].description}
                </p>

                <div className="hero__main-address">
                  <Image
                    width={24}
                    height={24}
                    src="images/icons/location.svg"
                    alt="location"
                  />
                  <p>{hero[0].address}</p>
                </div>
              </div>
            </div>

            <div className="hero__main-right">
              <div className="hero__main-image-container">
                <picture>
                  <source
                    srcSet={hero[0].heroImageMobile}
                    media="(max-width: 648px)"
                  />
                  <Image
                    src={hero[0].heroImage}
                    alt="Засновниця"
                    width={718}
                    height={530}
                    className="hero__main-image"
                  />
                </picture>
              </div>
              <div className="hero__main-address hero__main-address--mobile">
                <Image
                  width={24}
                  height={24}
                  src="images/icons/location.svg"
                  alt="location"
                />
                <p>{hero[0].address}</p>
              </div>
            </div>
          </div>

          <div className="hero__intro">
            <div className="hero__intro-left">
              <div className="hero__intro-image-container">
                <Image
                  src={hero[0].introImage}
                  alt="Засновниця"
                  width={400}
                  height={540}
                  className="hero__intro-image"
                />
              </div>
            </div>

            <div className="hero__intro-right">
              <div className="hero__intro-text">
                <div>
                  <h3
                    className={`
                      ${playfair_display.variable}
                      title
                      hero__intro-title
                    `}
                  >
                    {hero[0].introTitle}
                  </h3>
                  <div className="hero__intro-details">
                    <PortableText value={hero[0].introDetails} />
                  </div>

                  <div className="hero__intro-image-mobile-container">
                    <Image
                      src={hero[0].introImage}
                      alt="Засновниця"
                      width={343}
                      height={300}
                      className="hero__intro-image"
                    />
                  </div>

                  <div className="hero__services">
                    <p>У FIT77 ми:</p>
                    <div>
                      <div className="hero__services-item">
                        <Image
                          width={24}
                          height={24}
                          src="images/icons/bicycle.svg"
                          alt="bicycle"
                        />
                        <p>пропонуємо тренування різних напрямків;</p>
                      </div>
                      <div className="hero__services-item">
                        <Image
                          width={24}
                          height={24}
                          src="images/icons/paper.svg"
                          alt="paper"
                        />
                        <p>розробляємо індивідуальні тренувальні програми;</p>
                      </div>
                      <div className="hero__services-item">
                        <Image
                          width={24}
                          height={24}
                          src="images/icons/dumbbell.svg"
                          alt="dumbbell"
                        />
                        <p>забезпечуємо професійним обладнанням;</p>
                      </div>
                      <div className="hero__services-item">
                        <Image
                          width={24}
                          height={24}
                          src="images/icons/heart.svg"
                          alt="heart"
                        />
                        <p>створюємо комфортну атмосферу.</p>
                      </div>
                    </div>
                  </div>

                  <p>
                    Якщо ви хочете займатися спортом та покращити своє здоров&apos;я,
                    приходьте до нас в FIT77! Ми будемо раді бачити вас у нашій студії.
                  </p>
                </div>

                <div className="hero__cta-button">
                  <Button type="color" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
