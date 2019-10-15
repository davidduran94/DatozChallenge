export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload,
  });
  
export const deteleFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload,
  });
  
export const getItemsSource = payload => ({
    type: 'GET_ITEMS_SOURCE',
    payload,
  });
  

  
  export { setFavorite as default }