const hero = {
  name: 'hero',
  title: 'Головна',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'description',
      title: 'Опис',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'address',
      title: 'Адрес',
      type: 'string',
    },
  ],
};

export default hero;
