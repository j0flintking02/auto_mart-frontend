import { ADD_USER } from '../actions/actionType';

const initialState = {
    data: {}
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}