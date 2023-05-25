import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

export const getAbout = async () => (
  createClient(clientConfig).fetch(
    groq`*[_type == 'about'] {
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      'image': image.asset->url,
      description,
    }`,
  )
);
