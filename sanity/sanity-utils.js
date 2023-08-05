import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

export const getHero = async () => (
  createClient(clientConfig).fetch(
    groq`*[_type == 'hero'] {
      title,
      'heroImage': heroImage.asset->url,
      'heroImageMobile': heroImageMobile.asset->url,
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

export const getPrices = async () => (
  createClient(clientConfig).fetch(
    groq`*[_type == 'price'] {
      _id,
      units,
      'image': image.asset->url,
    }`,
  )
);

export const getTrainers = async () => (
  createClient(clientConfig).fetch(
    groq`*[_type == 'trainers'] {
      _id,
      name,
      class,
      order,
      'imageFront': imageFront.asset->url,
      'imageBack': imageBack.asset->url,
    }`,
  )
);

export const getContacts = async () => (
  createClient(clientConfig).fetch(
    groq`*[_type == 'contacts'] {
      _id,
      title,
      address,
      embedGoogleMaps,
      openHours,
      telegram,
      instagram,
      video
    }`,
  )
);
