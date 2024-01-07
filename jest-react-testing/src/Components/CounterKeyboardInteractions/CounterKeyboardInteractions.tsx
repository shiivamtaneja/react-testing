import React from 'react';

export const CounterKeyboardInteractions = () => {
  const [count, setCount] = React.useState(0);
  const [amount, setAmount] = React.useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(parseInt(e.target.value));
  const handleSetCount = () => setCount(amount);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => handleAmountChange(e)}
      />
      <button onClick={handleSetCount}>Set</button>
    </div>
  )
}