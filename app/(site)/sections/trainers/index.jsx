import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import MarqueeText from '../../components/MarqueeText';
import { getTrainers } from '@/sanity/sanity-utils';
import { playfair_display } from '../../fonts';

const Trainers = async () => {
  const trainers = await getTrainers();
  const sortedTrainers = trainers.sort((prevItem, currItem) => (
    prevItem.order - currItem.order
  ));

  return (
    <section id="trainers">
      <Marquee speed={100}>
        <MarqueeText text="тренери" />
      </Marquee>

      <div className="container">
        <div className="trainers">
          {sortedTrainers.map(trainer => (
            <div
              className="trainers__trainer"
              key={trainer.order}
            >
              <div className="trainers__trainer-image-container">
                <Image
                  src={trainer.imageFront}
                  alt={trainer.name}
                  width={294}
                  height={300}
                  className="trainers__trainer-image"
                />
                {trainer.imageBack && (
                  <Image
                    src={trainer.imageBack}
                    alt={trainer.name}
                    width={294}
                    height={300}
                    className="trainers__trainer-image trainers__trainer-image--back"
                  />
                )}
              </div>
              <h3 className={`${playfair_display.variable} title trainers__trainer-name`}>
                {trainer.name}
              </h3>
              <h4 className={`${playfair_display.variable} title trainers__trainer-class`}>
                {trainer.class}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
