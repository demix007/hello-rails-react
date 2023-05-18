import { configureStore } from '@reduxjs/toolkit';
const SHOW_GREETING = 'greetings/greetings/SHOW_MESSAGE';
const API_LINK = 'http://127.0.0.1:3000/api/random_greeting';

const initialState = {
  greeting: '',
};

export default function greetingsReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_GREETING:
      return {
        ...state,
        greeting: action.payload.greeting_text,
      };

    default:
      return state;
  }
}

const setGreetingAction = (greetingObj) => ({
  type: SHOW_GREETING,
  payload: greetingObj,
});

const fetchGreetingObj = () => async (dispatch) => {
  await fetch(API_LINK, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((result) => result.json())
    .then((res) => {
      const msg = {
        greeting_text: res.greeting_text,
      };
      dispatch(setGreetingAction(msg));
    });
};

export { fetchGreetingObj, setGreetingAction };

export const store = configureStore({ reducer: { greeting: Greet } });
