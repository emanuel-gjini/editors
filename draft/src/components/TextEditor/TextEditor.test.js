import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextEditor from './TextEditor';

describe('<TextEditor />', () => {
  test('it should mount', () => {
    render(<TextEditor />);
    
    const textEditor = screen.getByTestId('TextEditor');

    expect(textEditor).toBeInTheDocument();
  });
});