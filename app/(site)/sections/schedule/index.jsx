import { getSchedule } from '@/sanity/sanity-utils';
import Table from '../../components/Table';

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
            <Table key={days.id} days={days} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
