import React from 'react';
import { render } from '@testing-library/react';
import Content from './Content';

test('renders title', () => {
  const { getByText } = render(<Content />);
  const titleElement = getByText(/Software Engineer && Dog Lover/);
  expect(titleElement).toBeInTheDocument();
});