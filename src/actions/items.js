import axios from 'axios';
import { APIallItems, APIitemImg } from '../serverLocation';


export const startAddItem = (itemData ={}, image) => {
  // set up form data for img upload
  const formData = new FormData();
  formData.append('image', image);

  
  const addImage = axios.post(APIitemImg, formData);

  return (dispatch) => {
    addImage.then(({data}) => {
      const imagePath = data.path;
      const obj = {
        ...itemData,
        imagePath
      };
      axios.post(APIallItems, obj).then(({data}) => {
        dispatch({
          type: 'ADD_ITEM',
          item: data
        });
      });
    });
  };
}

export const startRemoveItem = (itemId) => {
  const urlAPI = `${APIallItems}/${itemId}`;
  const deleteItem = axios.delete(urlAPI, itemId);
  return(dispatch) => {
    deleteItem.then(({data}) => {
      dispatch({
        type: 'DELETE_ITEM',
        itemId: data
      });
    });    
  };
}

export const startRecieveAll = () => {
  // const urlAPI = 'http://localhost:3001/api/items';
  const requestAllItems = axios.get(APIallItems);
  // bc of redux-thunk, we are returning a dispatch fxn
  return (dispatch) => {
    requestAllItems.then(({data}) => {
      dispatch({
        type: 'RECIEVE_ALL',
        data
      });
    });
  };
}