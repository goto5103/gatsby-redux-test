import { countActions } from './countActions';

/** ベースアクション */
export interface IAction {
  type: string;
}

export const actions = {
  countActions,
};
