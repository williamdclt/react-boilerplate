/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';
import { test } from 'redux/language/language.saga';
import injectSaga from 'utils/injectSaga';

const HomeWrapper = Loadable({
  loader: () => import('./HomePage'),
  loading: () => null,
});

export default injectSaga({ key: 'home', saga: test })(HomeWrapper);
