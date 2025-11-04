import { render } from '@testing-library/react';

import ReactCourseDesignSystem from './design-system';

describe('ReactCourseDesignSystem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactCourseDesignSystem />);
    expect(baseElement).toBeTruthy();
  });
});
