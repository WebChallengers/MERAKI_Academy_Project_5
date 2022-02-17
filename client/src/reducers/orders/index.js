const iniaialState = {
  orders: [],
};

const orders = (state = iniaialState, { type, payload }) => {
  switch (type) {
    case "SET_ORDERS":
      return { ...state, products: orders };
    case "ADD_ORDERS":
      return { ...state, products: [...state.orders, payload] };
    case "UPDATE_ORDER":
      return {
        ...state,
        products: state.products.map((element) => {
          if (payload.id === element.id) {
            return element;
          }
        }),
      };
    case "DELETE_ORDER":
      return {
        ...state,
        products: state.products.filter((element) => {
          return element.id != payload;
        }),
      };
    default:
      return state;
  }
};

export const setOrders = (orders) => {
  return { type: "SET_ORDERS", payload: orders };
};

export const addProducts = (orders) => {
  return { type: "ADD_ORDERS", payload: orders };
};
export const updateProduct = (updatedOrder) => {
  return { type: "UPDATE_ORDER", payload: updatedOrder };
};

export const deletePorduct = (id) => {
  return { type: "DELETE_ORDER", payload: id };
};
export default orders;
