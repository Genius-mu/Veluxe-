import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "veluxe.cart";

const load = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, quantity = 1 } = action;
      const existing = state.find((i) => i.id === product.id);
      if (existing) {
        return state.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [...state, { ...product, quantity }];
    }
    case "UPDATE_QTY":
      return state.map((i) =>
        i.id === action.id ? { ...i, quantity: action.quantity } : i,
      );
    case "REMOVE":
      return state.filter((i) => i.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, load);

  // Persist to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* quota / private mode — swallow */
    }
  }, [items]);

  const value = {
    items,
    count: items.reduce((sum, i) => sum + i.quantity, 0),
    add: (product, quantity = 1) =>
      dispatch({ type: "ADD", product, quantity }),
    updateQty: (id, quantity) => dispatch({ type: "UPDATE_QTY", id, quantity }),
    remove: (id) => dispatch({ type: "REMOVE", id }),
    clear: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
