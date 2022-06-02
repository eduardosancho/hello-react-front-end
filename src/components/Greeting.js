import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingsFromAPI, getGreetings, selectGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreeting);

  const fetchData = async () => {
    const greetingsFromAPI = await getGreetingsFromAPI();
    dispatch(getGreetings(greetingsFromAPI));
  };

  useEffect(() => {
    setTimeout(() => fetchData(), 1000);
  }, []);

  return (
    <>
      <p><em>Your fetched greeting:</em></p>
      <h1>{greeting.message}</h1>
      <br />
      <p><strong>Refresh the page to get a new greeting!</strong></p>
    </>
  );
};

export default Greeting;
