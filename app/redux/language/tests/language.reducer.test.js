import { fromJS } from 'immutable';

import languageProviderReducer from '../language.reducer';
import { CHANGE_LOCALE } from '../language.constants';

describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual(
      fromJS({
        locale: 'en',
      }),
    );
  });

  it('changes the locale', () => {
    expect(
      languageProviderReducer(undefined, {
        type: CHANGE_LOCALE,
        locale: 'de',
      }).toJS(),
    ).toEqual({
      locale: 'de',
    });
  });
});
