import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterProps } from "./CounterProps";

describe('Counter with Props', () => {
  test('renders correctly', () => {
    render(<CounterProps count={0} />)
    const textElement = screen.getByText('Counter Props')
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    userEvent.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterProps
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", { name: 'Increment' });
    await userEvent.click(incrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);

    const decrementButton = screen.getByRole("button", { name: 'Decrement' });
    await userEvent.click(decrementButton);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});