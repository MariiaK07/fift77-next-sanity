const priceItem = {
  name: 'priceItem',
  title: 'Прайс заняття',
  type: 'object',
  fields: [
    {
      name: 'unit',
      title: 'Заняття',
      type: 'string',
    },
    {
      name: 'unitPrice',
      title: 'Вартість',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default priceItem;
