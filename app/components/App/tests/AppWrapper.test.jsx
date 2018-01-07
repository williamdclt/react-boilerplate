import App from '../App';
import AppWrapper from '../AppWrapper';

describe('AppWrapper', () => {
  it('does not change the wrapped component', () => {
    expect(AppWrapper).toBe(App);
  });
});
