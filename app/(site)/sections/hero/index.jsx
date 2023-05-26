import Image from 'next/image';
import { getHero } from '@/sanity/sanity-utils';

const Hero = async () => {
  const hero = await getHero();

  return (
    <section id="hero">
      <div>
        <span>ТВОЯ</span>
        <span>ФІТНЕС</span>
        <span>СТУДІЯ</span>
      </div>

      <div>
        {hero[0].description}
      </div>

      <Image
        src={hero[0].image}
        alt="hero"
        width={200}
        height={100}
      />

      <div>
        {hero[0].address}
      </div>
    </section>
  );
};

export default Hero;
