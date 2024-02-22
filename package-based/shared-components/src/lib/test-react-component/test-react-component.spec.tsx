import { render } from '@testing-library/react';

import TestReactComponent from './test-react-component';

describe('TestReactComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestReactComponent />);
    expect(baseElement).toBeTruthy();
  });
});
