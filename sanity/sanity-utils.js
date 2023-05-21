import { createClient, groq } from 'next-sanity';

export const getAbout = async () => {
  const client = createClient({
    projectId: 'n8onodul',
    dataset: 'production',
    apiVersion: '2023-05-17',
  });

  return client.fetch(
    groq`*[_type == 'about'] {
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      'image': image.asset->url,
      description,
    }`,
  );
};
