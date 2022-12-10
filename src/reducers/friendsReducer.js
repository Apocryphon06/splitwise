const initialState = ["Hrithik C", "Mahesh Kestur"];

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FRIEND":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default friendsReducer;
