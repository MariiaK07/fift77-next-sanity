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
      name: 'heroImage',
      title: 'Картинка',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'address',
      title: 'Адрес',
      type: 'string',
    },
    {
      name: 'introImage',
      title: 'Фото засновниці',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'introTitle',
      title: 'Інтро від засновниці',
      type: 'string',
    },
    {
      name: 'introDetails',
      title: 'Про засновницю',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default hero;
