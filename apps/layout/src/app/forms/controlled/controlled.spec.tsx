import { render } from '@testing-library/react';

import Uncontrolled from './uncontrolled';

describe('Uncontrolled', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Uncontrolled />);
    expect(baseElement).toBeTruthy();
  });
});
