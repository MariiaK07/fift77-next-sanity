import Image from 'next/image';
import { getTrainers } from '@/sanity/sanity-utils';
import { playfair_display } from '../../fonts';

const Trainers = async () => {
  const trainers = await getTrainers();
  const sortedTrainers = trainers.sort((prevItem, currItem) => (
    prevItem.order - currItem.order
  ));

  return (
    <section id="trainers">
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
                  className="trainers__trainer-image--front trainers__trainer-image--front"
                />
              </div>
              {trainer.imageBack && (
                <div className="trainers__trainer-image-container">
                  <Image
                    src={trainer.imageBack}
                    alt={trainer.name}
                    width={294}
                    height={300}
                    className="trainers__trainer-image--back trainers__trainer-image--back"
                  />
                </div>
              )}
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
