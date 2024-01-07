import { CounterPropsType } from './CounterProps.types';

export const CounterProps = (props: CounterPropsType) => {
  return (
    <div>
      <h1>Counter Props</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
};