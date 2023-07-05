const trainers = {
  name: 'trainers',
  title: 'Тренери',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Ім\'я тренера',
      type: 'string',
    },
    {
      name: 'class',
      title: 'Назва заняття',
      type: 'string',
    },
    {
      name: 'imageFront',
      title: 'Основна картинка',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'imageBack',
      title: 'Картинка при наведенні',
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

export default trainers;
