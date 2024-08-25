import React from "react";

function CountButton({ count, setCount }) {
  const incrementCount = (count) => {
    setCount(count + 1);
  };
  return <button onClick={incrementCount(count)}>Count is {count}</button>;
}

export default CountButton;
