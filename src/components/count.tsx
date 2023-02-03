import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countActions } from '../actions/countActions';
import { IAppState } from '../state/createStore';
interface IProps {
  count: number;
}
const Count: React.FC<IProps> = ({ count }) => {
  const { state } = useSelector(selecter);
  const dispatch = useDispatch();
  const handleIncrement: React.MouseEventHandler<HTMLButtonElement> = (_) => {
    dispatch(countActions.increment(count));
  };
  return (
    <>
      <button onClick={handleIncrement}>インクリメント + {count}</button>
      <p>{state?.count}</p>
    </>
  );
};
const selecter = (state: IAppState) => {
  console.log(selecter.name, state);
  return { state };
};

export default Count;
