const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FAVORITE':
        return {
          ...state,
          productsFavs: [...state.productsFavs.filter(items => items._id !== action.payload._id), action.payload]
        }
      case 'DELETE_FAVORITE':
        return {
          ...state,
          productsFavs: state.productsFavs.filter(items => items._id !== action.payload)
        }
      case 'GET_ITEMS_SOURCE':
        return {
          ...state,
          products: action.payload.data.reverse() || {}
        }
      default:
        return state;
    }
  };
  
  export default reducer;