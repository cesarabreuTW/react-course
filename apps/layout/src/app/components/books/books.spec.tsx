import { render } from '@testing-library/react';

import Book from './books';

describe('Book', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Book />);
    expect(baseElement).toBeTruthy();
  });
});
