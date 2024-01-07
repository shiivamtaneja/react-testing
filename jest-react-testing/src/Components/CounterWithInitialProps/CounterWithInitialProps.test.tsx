import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterWithInitialProps } from "./CounterWithInitialProps";

describe('Counter', () => {
  test('renders correctly', () => {
    render(<CounterWithInitialProps initialCount={0} />);

    const countElement = screen.getByRole('heading', {
      level: 1
    });
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', {
      name: 'Increment'
    });
    expect(incrementButton).toBeInTheDocument();

    const decrementButton = screen.getByRole('button', {
      name: 'Decrement'
    });
    expect(decrementButton).toBeInTheDocument();

    const resetButton = screen.getByRole('button', {
      name: 'Reset'
    });
    expect(resetButton).toBeInTheDocument();

    const switchSignsButton = screen.getByRole('button', {
      name: 'Switch Signs'
    });
    expect(switchSignsButton).toBeInTheDocument();
  });

  test('renders with initial count of 0', () => {
    render(<CounterWithInitialProps initialCount={0} />);

    const countElement = screen.getByRole('heading', {
      level: 1
    });
    expect(countElement).toHaveTextContent('0');
  });

  test('renders a count of 1 after clicking the increment button', async () => {
    userEvent.setup()

    render(<CounterWithInitialProps initialCount={0} />);

    const incrementButton = screen.getByRole('button', {
      name: 'Increment'
    });

    await userEvent.click(incrementButton);

    const countElement = screen.getByRole('heading', {
      level: 1
    });
    expect(countElement).toHaveTextContent('1');
  });

  test('renders a count of -1 after clicking the decrement button', async () => {
    userEvent.setup()

    render(<CounterWithInitialProps initialCount={0} />);

    const decrementButton = screen.getByRole('button', {
      name: 'Decrement'
    });

    await userEvent.click(decrementButton);

    const countElement = screen.getByRole('heading', {
      level: 1
    });
    expect(countElement).toHaveTextContent('-1');
  });

  test('renders a count of 0 after clicking the reset button', async () => {
    userEvent.setup()

    render(<CounterWithInitialProps initialCount={10} />);

    const resetButton = screen.getByRole('button', {
      name: 'Reset'
    });

    await userEvent.click(resetButton);

    const countElement = screen.getByRole('heading', {
      level: 1
    });
    expect(countElement).toHaveTextContent('0');
  });

  test('renders the inverted count after clicking the swtich signs button', async () => {
    userEvent.setup()

    render(<CounterWithInitialProps initialCount={10} />);

    const switchSignsButton = screen.getByRole('button', {
      name: 'Switch Signs'
    });

    await userEvent.click(switchSignsButton);

    const countElement = screen.getByRole('heading', {
      level: 1
    });
    expect(countElement).toHaveTextContent('-10');
  });
});