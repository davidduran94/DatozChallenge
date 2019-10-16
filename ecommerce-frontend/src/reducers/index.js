const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FAVORITE':
        return {
          ...state,
          productsFavs: [...state.productsFavs.filter(items => items.id !== action.payload.id), action.payload]
        }
      case 'DELETE_FAVORITE':
        return {
          ...state,
          productsFavs: state.productsFavs.filter(items => items.id !== action.payload)
        }
      case 'GET_ITEMS_SOURCE':
        return {
          ...state,
          products: state.productsList.filter(item => item.name === action.payload) || {}
        }
      default:
        return state;
    }
  };
  
  export default reducer;