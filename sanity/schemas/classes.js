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
      name: 'order',
      title: 'Порядковий номер',
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
  ],
};

export default classes;
