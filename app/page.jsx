import { getAbout } from '@/sanity/sanity-utils';

const Home = async () => {
  const about = await getAbout();

  return (
    <div>
      {about[0].title}
      {about[0].description}
    </div>
  );
};

export default Home;
