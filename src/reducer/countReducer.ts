import {
  CountActionTypes,
  countActionTypes,
  ICountAction,
} from '../actions/countActions';
import { initialState, IAppState } from '../state/createStore';
const reducer = (state = initialState, action: ICountAction) => {
  try {
    const exec: { [key in CountActionTypes]: () => IAppState } = {
      [countActionTypes.INCREMENT]: () => increment(state, action.count),
    };
    return exec[action.type]();
  } catch (error) {
    console.error(countReducer.reducer.name, error);
    return state;
  }
};

/**
 * インクリメント
 * @param state
 * @param count
 * @returns
 */
const increment = (state: IAppState, count: number) => {
  return Object.assign({}, state, {
    count: state.count + count,
  });
};

/**
 * 型チェック
 * @param arg
 * @returns
 */
const isCountAction = (arg: unknown) => {
  console.log(
    arg != null,
    typeof arg === 'object',
    typeof (arg as ICountAction).count === 'number',
    typeof (arg as ICountAction).type === 'string',
  );
  return (
    arg != null &&
    typeof arg === 'object' &&
    typeof (arg as ICountAction).count === 'number' &&
    typeof (arg as ICountAction).type === 'string'
  );
};

export const countReducer = {
  reducer,
  isCountAction,
};
