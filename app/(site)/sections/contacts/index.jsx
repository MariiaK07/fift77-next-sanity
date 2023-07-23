import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Marquee from 'react-fast-marquee';
import MarqueeText from '../../components/MarqueeText';
import { getContacts } from '@/sanity/sanity-utils';
import { playfair_display } from '../../fonts';

const Contacts = async () => {
  const contacts = await getContacts();

  return (
    <section id="contacts" className="contacts">
      <Marquee speed={100}>
        <MarqueeText text="fit 77" />
      </Marquee>

      <div className="contacts__container">
        <iframe
          title="map"
          src={`${contacts[0].embedGoogleMaps}`}
          width="920"
          height="442"
          className="contacts__map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="contacts__info">
          <h4 className={`${playfair_display.variable} title contacts__title`}>
            {contacts[0].title}
          </h4>
          <div className="contacts__items">
            <div className="contacts__items-item">
              <Image
                width={24}
                height={24}
                src="images/icons/location.svg"
                alt="location"
              />
              {contacts[0].address}
            </div>
            <div className="contacts__items-item contacts__items-item--open-hours">
              <Image
                width={24}
                height={24}
                src="images/icons/clock.svg"
                alt="clock"
              />
              <div className="contacts__items-open-hours">
                <p>Години роботи:</p>
                <div>
                  <PortableText value={contacts[0].openHours} />
                </div>
              </div>
            </div>
            <div className="contacts__items-item">
              <Image
                width={24}
                height={24}
                src="images/icons/telegram.svg"
                alt="telegram"
              />
              <a
                href={contacts[0].telegram}
                target="_blank"
                rel="noreferrer"
              >
                Наш Telegram
              </a>
            </div>
            <div className="contacts__items-item">
              <Image
                width={24}
                height={24}
                src="images/icons/instagram.svg"
                alt="instagram"
              />
              <a
                href={contacts[0].instagram}
                target="_blank"
                rel="noreferrer"
              >
                Наш Instagram
              </a>
            </div>
            <div className="contacts__items-item">
              <Image
                width={24}
                height={24}
                src="images/icons/video.svg"
                alt="video"
              />
              <a
                href={contacts[0].video}
                target="_blank"
                rel="noreferrer"
              >
                Відеоінструкція як нас знайти
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
