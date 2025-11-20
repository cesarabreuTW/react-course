import { render } from '@testing-library/react';

import ResorceLoaderRender from './resorce-loader-render';

describe('ResorceLoaderRender', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResorceLoaderRender />);
    expect(baseElement).toBeTruthy();
  });
});
