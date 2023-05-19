import { FETCH_RANDOM_MESSAGE_SUCCESS } from '../actions/messageActions';

const initialState = {
  message: null,
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RANDOM_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}
