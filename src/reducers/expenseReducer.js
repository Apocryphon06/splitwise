//DATA
const initialState = [
  {
    description: "Car service and repair",
    amount: 21351,
    date: "2022-12-09",
    group: "D2D",
  },
  {
    description: "car fuel - 1",
    amount: 3800,
    date: "2022-11-3",
    group: "goa",
  },
];

//REDUCER
const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [
        ...state,
        {
          description: action.description,
          amount: action.amount,
          date: action.date,
          group: action.group,
        },
      ];
    default:
      return state;
  }
};

export default expenseReducer;
