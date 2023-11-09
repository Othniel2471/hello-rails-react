import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings.message);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  return (
    <div>
      <h1>{greetings}</h1>
    </div>
  );
};

export default Greeting;
