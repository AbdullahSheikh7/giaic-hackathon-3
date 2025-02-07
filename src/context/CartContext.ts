import { createContext, Dispatch } from "react";

interface Item {
  id: string;
  name: string;
  tag: string;
  imageUrl: string;
  oldPrice?: number;
  price: number;
  unit: string;
  quantity: number;
}

type ActionDT =
  | { type: "SET_DATA"; payload: Item[] }
  | { type: "ADD_ITEM"; payload: Omit<Item, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "REMOVE_ITEM_BY_ONE"; payload: { id: string } }
  | { type: "CLEAR_CART"; payload: {} };

export const initialState: {
  items: Item[];
} = { items: [] };

export const cartReducer = (
  state: {
    items: Item[];
  },
  action: ActionDT
) => {
  switch (action.type) {
    case "SET_DATA":
      return { items: action.payload };
    case "ADD_ITEM":
      if (
        state.items &&
        state.items.find((item) => item.id === action.payload.id)
      ) {
        const items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        return {
          items,
        };
      }
      const newItems = [...state.items, { ...action.payload, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(newItems));
      return {
        items: newItems,
      };
    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(filteredItems));
      return {
        items: filteredItems,
      };
    case "REMOVE_ITEM_BY_ONE":
      const items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      localStorage.setItem("cart", JSON.stringify(items));
      return {
        items,
      };
    case "CLEAR_CART":
      localStorage.setItem("cart", JSON.stringify([]));
      return initialState;
    default:
      throw new Error(`Unhandled action type`);
  }
};

const CartContext = createContext<{
  state: {
    items: Item[];
  };
  dispatch: Dispatch<ActionDT>;
}>({ state: initialState, dispatch: () => null });

export default CartContext;
