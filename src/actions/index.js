export const test = () => {
  return {
    type: "TEST",
  };
};

export const addFriend = (name) => {
  return {
    type: "ADD_FRIEND",
    payload: name,
  };
};

export const addGroup = (name) => {
  return {
    type: "ADD_GROUP",
    payload: name,
  };
};

export const addExpense = (description, amount, date, group) => {
  return {
    type: "ADD_EXPENSE",
    description: description,
    amount: amount,
    date: date,
    group: group,
  };
};
