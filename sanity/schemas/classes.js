const classes = {
  name: 'classes',
  title: 'Заняття',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва заняття',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Опис заняття',
      type: 'string',
    },
    {
      name: 'classImage',
      title: 'Картинка заняття',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Порядковий номер',
      type: 'string',
    },
  ],
};

export default classes;
