import axios from 'axios'; // para hacer llamadas a API

/**
 * Listado de acciones que se pueden ejecutar por component
 * @param {*} payload 
 */

export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload,
  });
  
export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload,
  });
  
export const getItemsSource = payload => ({
    type: 'GET_ITEMS_SOURCE',
    payload,
});

export const setError = payload => ({
  type: 'SET_ERROR',
  payload
});

export const founds = payload => ({
  type: 'FOUNDS',
  payload
});


/**
 * Thunks para el llamado a API asincrono
 * @param {*} payload 
 */
export const searchAgain = payload => {
  return (dispatch) => {
    axios.get(`http://localhost:3000/products/${payload}`)
      .then( ({data} ) => dispatch(getItemsSource(data)))
      .catch((err) => dispatch(setError(err)));
  }
};

export const getProducts = payload => {
  return (dispatch) => {
    axios.get(`http://localhost:3000/products/generate/${payload}`)
      .then( ({data} ) => dispatch(searchAgain(payload)))
      .catch((err) => dispatch(setError(err)));
  }
};
  

  
export { setFavorite as default }