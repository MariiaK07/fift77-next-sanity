import Hero from './sections/hero';
import Classes from './sections/classes';
import Schedule from './sections/schedule';
import Price from './sections/price';
import Trainers from './sections/trainers';
import Gallery from './sections/gallery';
import Contacts from './sections/contacts';

async function Home() {
  return (
    <>
      <Hero />
      <Classes />
      <Schedule />
      <Price />
      <Trainers />
      <Gallery />
      <Contacts />
    </>
  );
}

export default Home;
