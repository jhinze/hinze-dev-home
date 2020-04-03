import React from 'react';
import { render } from '@testing-library/react';
import EmailDialog from './EmailDialog';

test('dialog header is present', () => {
  const { getByText } = render(<EmailDialog  open/>);
  const titleElement = getByText(/E-Mail/);
  expect(titleElement).toBeInTheDocument();
});

test('recaptcha is present', () => {
  const { getByTestId } = render(<EmailDialog open/>);
  const element = getByTestId("recaptcha");
  expect(element).toBeInTheDocument();
});
