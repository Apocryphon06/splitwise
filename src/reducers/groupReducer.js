const initialState = ["goa", "D2D"];

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_GROUP":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default groupReducer;
