import React from 'react';
import ReactDOM from "react-dom";
import { render, screen } from '@testing-library/react';
import App from './App';

test('', () => {
  render(<App />);
  const linkElement = screen.getByText(//i);
  expect(linkElement).toBeInTheDocument());
});
