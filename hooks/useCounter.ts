import { useState } from 'react';

export const useCounter = (initialValue: number) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter => counter + 1);
  const decrement = () => setCounter(counter => counter - 1);

  return {
    counter,
    increment,
    decrement,
  };
};
