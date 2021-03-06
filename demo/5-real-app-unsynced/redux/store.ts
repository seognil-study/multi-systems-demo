import { createStore, Reducer } from 'redux';
import { ItemData } from '../types';

export type MyReduxState = {
  items: ItemData[];
};

export type MyReduxAction = { type: 'force'; items: ItemData[] };

const defState: MyReduxState = {
  items: [
    { id: '1', type: 'img', src: '' },
    { id: '2', type: 'img', src: '' },
    { id: '3', type: 'text', content: '' },
    { id: '4', type: 'text', content: '' },
  ],
};

const reducer: Reducer<MyReduxState, MyReduxAction> = (s = defState, a) =>
  a.items ? { items: a.items } : s;

export const myReduxStore = createStore(reducer);
