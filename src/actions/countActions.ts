import { IAction } from './actions';

/** カウントアクション */
export interface ICountAction extends IAction {
  type: CountActionTypes;
  count: number;
}

/** カウントアクション */
export const countActionTypes = {
  INCREMENT: 'INCREMENT',
} as const;

/** カウントアクション */
export type CountActionTypes =
  typeof countActionTypes[keyof typeof countActionTypes];

/**
 * インクリメントアクション
 * @param count
 * @returns
 */
const increment = (count: number): ICountAction => {
  const result = {
    type: countActionTypes.INCREMENT,
    count,
  };
  console.log(increment.name, { result });
  return result;
};

/**
 * 型チェック
 * @param arg
 * @returns
 */
export const isCountAction = (arg: unknown) => {
  return (
    arg != null &&
    typeof arg === 'object' &&
    typeof (arg as ICountAction).count === 'number' &&
    Object.entries(countActionTypes).some(
      ([_, v]) => v === (arg as ICountAction).type,
    )
  );
};

export const countActions = {
  increment,
};
