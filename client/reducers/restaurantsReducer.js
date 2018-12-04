import * as types from '../constants/actionTypes';

const initialState = {
  list: null,
  search: '',
};

const restaurantsReducer = (state=initialState, action) => {
  let list;
  switch(action.type) {

    case types.GET_RESTAURANTS:
      // console.log('payload is ', action.payload[0]);
      list = action.payload[0];
      // console.log('list is ', list)
      return {
        ...state,
        list,
      };
      
    default:
      return state;
  }
};

export default restaurantsReducer;
