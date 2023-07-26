import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { getSchedule } from '@/sanity/sanity-utils';
import { playfair_display } from '../../fonts';
import MarqueeText from '../../components/MarqueeText';

async function Schedule() {
  const daysOfTheWeek = await getSchedule();
  const sortedDaysOfTheWeek = daysOfTheWeek.sort((prevItem, currItem) => (
    prevItem.order - currItem.order
  ));

  return (
    <section id="schedule">
      <Marquee speed={100}>
        <MarqueeText text="розклад занять" />
      </Marquee>

      <div className="container">
        <div className="schedule">
          {sortedDaysOfTheWeek.map(days => (
            <div
              className="schedule__unit"
              key={days.title}
            >
              <h3 className={`${playfair_display.variable} schedule__unit-title title`}>
                {days.title}
              </h3>

              <div className="schedule__table">
                <div className="schedule__table-row">
                  <div className="schedule__table-cell">
                    <Image
                      width={24}
                      height={24}
                      src="images/icons/clock-thick.svg"
                      alt="Час заняття"
                    />
                  </div>
                  <div className="schedule__table-cell">
                    <Image
                      width={24}
                      height={24}
                      src="images/icons/dumbbell-thick.svg"
                      alt="Назва заняття"
                    />
                  </div>
                  <div className="schedule__table-cell">
                    <Image
                      width={24}
                      height={24}
                      src="images/icons/person-thick.svg"
                      alt="Тренер"
                    />
                  </div>
                </div>

                {days.classes.map(classItem => (
                  <div
                    className="schedule__table-row"
                    key={classItem.time}
                  >
                    <div className="schedule__table-cell">
                      {classItem.time}
                    </div>
                    <div className="schedule__table-cell">
                      {classItem.class}
                    </div>
                    <div className="schedule__table-cell">
                      {classItem.trainer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
