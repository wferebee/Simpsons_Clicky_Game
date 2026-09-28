import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders game instructions', () => {
  const { getByText } = render(<App />);
  const instructionElement = getByText(/click on an image to earn points/i);
  expect(instructionElement).toBeInTheDocument();
});
