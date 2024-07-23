export const ContactosReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((actual) => actual.id !== action.payload);

    case "edit":
      return state.map((contacto) =>
        contacto.id === action.payload.id ? action.payload : contacto
      );

    default:
      return state;
  }
};
