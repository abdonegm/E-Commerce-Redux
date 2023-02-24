import { ADD_CART } from "./type";
import { REMOVE } from "./type";
import { REMOVE_ITEM } from "./type";

export const ADD = (item) => {
  return {
    type: ADD_CART,
    payload: item,
  };
};

export const DELETE = (ID) => {
  return {
    type: REMOVE,
    payload: ID,
  };
};

export const REMOVE_IT = (it) => {
  return {
    type: REMOVE_ITEM,
    payload: it,
  };
};
