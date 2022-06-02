import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetingsFromAPI, getGreetings } from "../redux/greetings/greetings";
import { selectGreeting } from "../redux/greetings/greetings";

import React from "react";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreeting);

  useEffect(() => {
    const fetchData = async () => {
      const greetingsFromAPI = await getGreetingsFromAPI();
      dispatch(getGreetings(greetingsFromAPI));
    }
    fetchData();
  }, []);


  return (
    <>
      <p><em>Your fetched greeting:</em></p>
      <React.Fragment>
        <h1>{greeting.message}</h1>
        <br />
      </React.Fragment>
    </>
  )
}

export default Greeting;