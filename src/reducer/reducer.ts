import { IAction } from '../actions/actions';
import { countReducer } from './countReducer';
import { ICountAction } from '../actions/countActions';

/**
 * reducer
 *
 * Actionを判定し一致するActionを実施する
 *
 * @param state
 * @param action
 * @returns
 */
const reducer = (state: any, action: IAction) => {
  console.log(reducer.name, { state, action });
  if (countReducer.isCountAction(action)) {
    console.log(reducer.name, 'isCountAction');
    return countReducer.reducer(state, action as ICountAction);
  }

  return state;
};
export default reducer;
