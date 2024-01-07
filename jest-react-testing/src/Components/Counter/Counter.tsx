import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  const switchSigns = () => setCount((prev) => prev * (-1));

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => switchSigns()}>Switch Signs</button>
    </div>
  )
}
