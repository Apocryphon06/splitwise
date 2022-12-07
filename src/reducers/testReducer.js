const testReducer = (state = "initial state", action) => {
  switch (action.type) {
    case "test":
      return "redux store";
    default:
      return "success";
  }
};

export default testReducer;
