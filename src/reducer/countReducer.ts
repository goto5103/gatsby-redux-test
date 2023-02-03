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
    console.error(reducer.name, error);
    return state;
  }
};

/**
 * インクリメント
 * @param state
 * @param count
 * @returns
 */
const increment = (state: IAppState, count: number): IAppState => {
  return Object.assign({}, state, {
    count: state.count + count,
  });
};

export const countReducer = reducer;
