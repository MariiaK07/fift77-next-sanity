import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import MarqueeText from '../../components/MarqueeText';
import { getClasses } from '@/sanity/sanity-utils';
import { playfair_display } from '../../fonts';

const Classes = async () => {
  const classes = await getClasses();
  const sortedClasses = classes.sort((prevItem, currItem) => (
    prevItem.order - currItem.order
  ));

  return (
    <section id="classes">
      <Marquee speed={100}>
        <MarqueeText text="Види занять" />
      </Marquee>

      <div className="container">
        <div className="classes">
          {sortedClasses.map(classItem => (
            <div
              className="classes__item"
              key={classItem.order}
            >
              <div className="classes__item-image-container">
                <Image
                  src={classItem.image}
                  alt={classItem.title}
                  width={294}
                  height={300}
                  className="classes__item-image"
                />
                <div className="classes__item-description">
                  <p>{classItem.description}</p>
                </div>
              </div>
              <h3 className={`${playfair_display.variable} title classes__item-title`}>
                {classItem.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
