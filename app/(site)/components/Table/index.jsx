import Image from 'next/image';

const Table = ({ days }) => (
  <table>
    <caption>{days.title}</caption>
    <thead>
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
    </thead>
    <tbody>
      {days.classes.map(classItem => (
        <tr>
          <td>{classItem.time}</td>
          <td>{classItem.class}</td>
          <td>{classItem.trainer}</td>
        </tr>
      ))}
    </tbody>
  </table>

);

export default Table;
