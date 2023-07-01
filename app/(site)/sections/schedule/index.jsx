import Image from 'next/image';
import { getSchedule } from '@/sanity/sanity-utils';
import { playfair_display } from '../../fonts';

const Schedule = async () => {
  const daysOfTheWeek = await getSchedule();
  const sortedDaysOfTheWeek = daysOfTheWeek.sort((prevItem, currItem) => (
    prevItem.order - currItem.order
  ));

  return (
    <section id="schedule">
      <div className="container">
        <div className="schedule">
          {sortedDaysOfTheWeek.map(days => (
            // <div className="schedule__container">
            <div className="schedule__unit">
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
                  <div className="schedule__table-row">
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

                {/* <table>
                  <thead>
                    <tr>
                      <th style={{ opacity: 0 }}>0</th>
                      <th className={`${playfair_display.variable} schedule__table-title title`}>
                        {days.title}
                      </th>
                      <th style={{ opacity: 0 }}>0</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <Image
                          width={24}
                          height={24}
                          src="images/icons/clock-thick.svg"
                          alt="Час заняття"
                        />
                      </th>
                      <th>
                        <Image
                          width={24}
                          height={24}
                          src="images/icons/dumbbell-thick.svg"
                          alt="Назва заняття"
                        />
                      </th>
                      <th>
                        <Image
                          width={24}
                          height={24}
                          src="images/icons/person-thick.svg"
                          alt="Тренер"
                        />
                      </th>
                    </tr>
                    {days.classes.map(classItem => (
                      <tr>
                        <td>{classItem.time}</td>
                        <td>{classItem.class}</td>
                        <td>{classItem.trainer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
              </div>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
