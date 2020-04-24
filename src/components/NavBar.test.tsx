import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

test('my name is in the title', () => {
  const { getByText } = render(<Navbar />);
  const titleElement = getByText(/Justin Hinze/);
  expect(titleElement).toBeInTheDocument();
});

test('has email icon', () => {
  const { getByTestId } = render(<Navbar />);
  const element = getByTestId("email-icon");
  expect(element).toBeInTheDocument();
});

test('has blog icon', () => {
  const { getByTestId } = render(<Navbar />);
  const element = getByTestId("blog-icon");
  expect(element).toBeInTheDocument();
});

test('has GitHub icon', () => {
  const { getByTestId } = render(<Navbar />);
  const element = getByTestId("github-icon");
  expect(element).toBeInTheDocument();
});

test('has LinkedIn icon', () => {
  const { getByTestId } = render(<Navbar />);
  const element = getByTestId("linkedin-icon");
  expect(element).toBeInTheDocument();
});

test('open email dialog', () => {
  const { getByText, getByTestId } = render(<Navbar />);
  const emailLink = getByTestId("email-link");
  fireEvent.click(emailLink);
  const dialogTitle = getByText(/E-Mail/);
  expect(dialogTitle).toBeInTheDocument();
});