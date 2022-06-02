const GET_GREETINGS_SUCCESS = 'HELLO_REACT_FRONT_END/GREETINGS/GET_GREETINGS_SUCCESS';

const initialState = {
  message: 'Wait one second',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_GREETINGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const getGreetings = (payload) => ({
  type: GET_GREETINGS_SUCCESS,
  payload,
});

const getGreetingsFromAPI = async () => fetch('https://desolate-tundra-61515.herokuapp.com/api/v1/greetings')
  .then((response) => response.json())
  .then((json) => json.greetings[0]);

export const selectGreeting = (state) => state.greetingsReducer;

export default reducer;
export { getGreetingsFromAPI, getGreetings };
