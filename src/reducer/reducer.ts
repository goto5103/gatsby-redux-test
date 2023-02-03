import { IAction } from '../actions/actions';
import { countReducer } from './countReducer';
import { ICountAction, isCountAction } from '../actions/countActions';
import { IAppState } from '../state/createStore';
interface ReducerExec {
  check: (arg: unknown) => boolean;
  reducer: IAppState;
}
interface ReducerExec2 {
  check: (arg: unknown) => boolean;
  reducer: <T extends IAction>(state: IAppState, action: IAction) => IAppState;
}
/**
 * reducer
 *
 * Actionを判定し一致するActionを実施する
 *
 * @param state
 * @param action
 * @returns
 */
const appReducer = (state: any, action: IAction) => {
  console.log(appReducer.name, { state, action });
  try {
    // TODO 強引にif文消しすぎか
    // const reducerExec: ReducerExec[] = [
    //   {
    //     check: isCountAction,
    //     reducer: countReducer(state, action as ICountAction),
    //   },
    // ];

    // return reducerExec.find((x) => x.check(action))?.reducer ?? state;

    if (isCountAction(action)) {
      return countReducer(state, action as ICountAction);
    }
    return state;
  } catch (error) {
    console.error(appReducer.name, error);
    return state;
  }
};
export default appReducer;
