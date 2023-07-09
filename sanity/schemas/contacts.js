const contacts = {
  name: 'contacts',
  title: 'Контакти',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва секції',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Адреса',
      type: 'string',
    },
    {
      name: 'embedGoogleMaps',
      title: 'Посилання з Google Maps (тільки те що в src)',
      type: 'string',
    },
    {
      name: 'openHours',
      title: 'Години роботи',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'telegram',
      title: 'Посилання на телеграм',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Посилання на інстаграм',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Посилання на відео "Як нас знайти"',
      type: 'string',
    },
  ],
};

export default contacts;
