const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FAVORITE':
        return {
          ...state,
          productsFavs: [...state.productsFavs, action.payload]
        }
      case 'DELETE_FAVORITE':
        return {
          ...state,
          productsFavs: state.productsFavs.filter(items => items.id !== action.payload)
        }
      case 'GET_ITEMS_SOURCE':
        return {
          ...state,
          playing: state.trends.find(item => item.id === Number(action.payload)) ||
            state.originals.find(item => item.id === Number(action.payload)) || {}
        }
      default:
        return state;
    }
  };
  
  export default reducer;