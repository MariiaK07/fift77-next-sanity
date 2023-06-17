import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

export const getHero = async () => (
  createClient(clientConfig).fetch(
    groq`*[_type == 'hero'] {
      title,
      'heroImage': heroImage.asset->url,
      description,
      address,
      'introImage': introImage.asset->url,
      introTitle,
      introDetails,
    }`,
  )
);

export const getClasses = async () => (
  createClient(clientConfig).fetch(
    groq`*[_type == 'classes'] {
      _id,
      title,
      order,
      'image': classImage.asset->url,
      description,
    }`,
  )
);

export const getSchedule = async () => (
  createClient(clientConfig).fetch(
    groq`*[_type == 'schedule'] {
      _id,
      title,
      classes,
      order,
    }`,
  )
);
