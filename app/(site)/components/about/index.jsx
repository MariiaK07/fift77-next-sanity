import { getAbout } from '@/sanity/sanity-utils';

const About = async () => {
  const about = await getAbout();

  return (
    <section>
      {about[0].title}
      <br />
      {about[0].description}
    </section>
  );
};

export default About;
