import { render, screen } from '@testing-library/react';
import App from './App';
import AppLs from './AppLs';

test('renders learn react link', () => {
  render(<App />);
  render(<AppLs />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
