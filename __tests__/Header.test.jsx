import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

test('renders Header with title', () => {
  render(<Header title="RL Inter" />);
  expect(screen.getByText('RL Inter')).toBeInTheDocument();
});
