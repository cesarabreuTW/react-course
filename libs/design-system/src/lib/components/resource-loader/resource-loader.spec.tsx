import { render } from '@testing-library/react';

import ResourceLoader from './resource-loader';

describe('ResourceLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResourceLoader />);
    expect(baseElement).toBeTruthy();
  });
});
