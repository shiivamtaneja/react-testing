import { renderHook } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('should render the default initial count of 0', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {}
    });

    expect(result.current.count).toBe(0);
  });

  test('should accept and render the same initial count of 10', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10
      }
    });

    expect(result.current.count).toBe(10);
  });
});