import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Software Engineer && Dog Lover/);
  expect(titleElement).toBeInTheDocument();
});

test('has navbar', () => {
  const { getByTestId } = render(<App />);
  const navbar = getByTestId("navbar");
  expect(navbar).toBeInTheDocument();
});

test('has content', () => {
  const { getByTestId } = render(<App />);
  const content = getByTestId("content");
  expect(content).toBeInTheDocument();
});