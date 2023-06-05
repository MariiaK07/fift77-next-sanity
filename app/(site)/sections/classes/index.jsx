import { getClasses } from '@/sanity/sanity-utils';
import Card from '../../components/Card';

const Classes = async () => {
  const classes = await getClasses();
  const sortedClasses = classes.sort((prevItem, currItem) => (
    prevItem.order - currItem.order
  ));

  return (
    <section id="classes">
      <div className="container">
        <div className="classes">
          {sortedClasses.map(classItem => (
            <Card
              key={classItem.id}
              item={classItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
