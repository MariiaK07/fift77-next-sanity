const prices = {
  name: 'price',
  title: 'Прайс',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва секції',
      type: 'string',
    },
    {
      name: 'units',
      title: 'Заняття та їх вартість',
      type: 'array',
      of: [{ type: 'priceItem' }],
    },
    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};

export default prices;
