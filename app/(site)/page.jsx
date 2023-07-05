import Hero from './sections/hero';
import Classes from './sections/classes';
import Schedule from './sections/schedule';
import Price from './sections/price';
import Trainers from './sections/trainers';
// import Contacts from './sections/contacts';

const Home = async () => (
  <>
    <Hero />
    <Classes />
    <Schedule />
    <Price />
    <Trainers />
    {/* <Contacts /> */}
  </>
);

export default Home;
