import uuid from 'uuid';

// add item

export const addItem = (
  {
    title = '',
    description = '',
    price = 0,

  } = {}
) => ({
  type: 'ADD_ITEM',
  item: {
    id: uuid(),
    title,
    description,
    price
  }
});