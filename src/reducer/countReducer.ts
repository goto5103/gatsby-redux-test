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
  return (
    arg != null &&
    typeof arg === 'object' &&
    typeof (arg as ICountAction).count === 'number' &&
    Object.entries(countActionTypes).some(
      ([_, v]) => v === (arg as ICountAction).type,
    )
  );
};

export const countReducer = {
  reducer,
  isCountAction,
};
