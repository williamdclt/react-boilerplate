import HomePageLoadable from '../Loadable';
import HomePageWrapper from '../HomePageWrapper';

describe('HomePageWrapper', () => {
  it('does not change the wrapped component', () => {
    expect(HomePageWrapper).toBe(HomePageLoadable);
  });
});
