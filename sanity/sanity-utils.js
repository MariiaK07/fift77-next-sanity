import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

export const getHero = async () => (
  createClient(clientConfig).fetch(
    groq`*[_type == 'hero'] {
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      'heroImage': heroImage.asset->url,
      description,
      address,
      'introImage': introImage.asset->url,
      introTitle,
      introDetails,
    }`,
  )
);
