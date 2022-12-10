//DATA
const initialState = [
  {
    description: "Car service and repair",
    amount: 21351,
    date: "2022-12-09",
    friends: ["Nishchal", "Hrithik"],
    group: "d2d expense",
  },
];

//REDUCER
const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, { test: "some data" }];
    default:
      return state;
  }
};

export default expenseReducer;
