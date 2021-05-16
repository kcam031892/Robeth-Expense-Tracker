import { ADD_NEW_REVENUE, ADD_NEW_EXPENSE } from 'constants/ActionTypes';
const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_NEW_EXPENSE:
      return { ...state, expenses: addNewExpense(state, payload) };
    case ADD_NEW_REVENUE:
      return { ...state, revenues: addNewRevenue(state, payload) };
    default:
      return state;
  }
};

const addNewExpense = ({ expenses }, payload) => {
  return expenses.map((expense) => {
    return expense.category === payload.category ? { ...expense, amount: (expense.amount += payload.amount) } : expense;
  });
};

const addNewRevenue = ({ revenues }, payload) => {
  return revenues.map((revenue) => {
    return revenue.category === payload.category ? { ...revenue, amount: (revenue.amount += payload.amount) } : revenue;
  });
};

export default reducer;
