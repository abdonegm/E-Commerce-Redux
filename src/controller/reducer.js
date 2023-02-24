import { ADD_CART } from "./type";
import { REMOVE } from "./type";
import { REMOVE_ITEM } from "./type";

const intialStore = {
  carts: [],
};

export const cartReducer = (state = intialStore, action) => {
  switch (action.type) {
    case ADD_CART:
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    case REMOVE:
      const filterItem = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: filterItem,
      };

    case REMOVE_ITEM:
      const itemIndex_desc = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[itemIndex_desc].qty >= 1) {
        state.carts[itemIndex_desc].qty -= 1;

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndex_desc].qty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id);
        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
