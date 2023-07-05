const schedule = {
  name: 'schedule',
  title: 'Розклад',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Дні тижня',
      type: 'string',
    },
    {
      name: 'classes',
      title: 'Заняття',
      type: 'array',
      of: [{ type: 'scheduleItem' }],
    },
    {
      name: 'order',
      title: 'Порядковий номер',
      type: 'string',
    },
  ],
};

export default schedule;
