const hero = {
  name: 'hero',
  title: 'Головна',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва секції',
      type: 'string',
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
      name: 'heroImageMobile',
      title: 'Картинка для мобільної версії',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'address',
      title: 'Адреса',
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
