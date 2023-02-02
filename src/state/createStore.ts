import { createStore } from 'redux';
import reducer from '../reducer/reducer';

/** state */
export interface IAppState {
  count: number;
}
export const initialState: IAppState = {
  count: 0,
};

const store = () => createStore(reducer, initialState);
export default store;
