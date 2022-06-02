const GET_GREETINGS_SUCCESS = 'HELLO_REACT_FRONT_END/GREETINGS/GET_GREETINGS_SUCCESS';

const reducer = (state = {}, action = {}) => {
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

const getGreetingsFromAPI = async () => {
  return fetch('http://127.0.0.1:3001/api/v1/greetings')
    .then(response => response.json())
}

export default reducer;
export { getGreetingsFromAPI, getGreetings, };