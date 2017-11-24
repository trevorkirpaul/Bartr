// import uuid from 'uuid';
import axios from 'axios';

// add item

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item
});

export const startAddItem = (itemData = {}) => {

  return (dispatch) => {
    const {
      title = '',
      description = '',
      price = 0
    } = itemData;

    const item = { title, description, price };
    const urlAPI = 'http://localhost:3001/api/items';

    axios.post(urlAPI, item)
      .then(
        (response) => {
          dispatch(addItem({
            _id: response.data.id,
            ...item
          }))
          
        }
      )
      .catch(err => console.err);

  };

};

export const removeItem = (itemId) => ({
  type: 'DELETE_ITEM',
  itemId
});

export const deleteItem = (itemId) => {
  const urlAPI = 'http://localhost:3001/api/items/' + itemId;
  axios.delete(urlAPI, itemId)
    .then(
      (itemId) => {
        // dispatch(removeItem(itemId));
      }
    )
    .catch(err => console.err);
}

export const recieveAll = (data) => ({
  type: 'RECIEVE_ALL',
  data
});