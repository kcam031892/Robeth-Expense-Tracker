import { useState, createContext, useReducer } from 'react';
import { INITIAL_VALUES } from 'constants/expenseInitialValues';
import expenseReducer from 'reducer/expenseReducer';
import { ADD_NEW_REVENUE, ADD_NEW_EXPENSE } from 'constants/expenseActionTypes';

const initialValues = {
  expenses: INITIAL_VALUES.expenses,
  revenues: INITIAL_VALUES.revenues
};

export const ExpenseContext = createContext(initialValues);

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialValues);
  const addNewExpense = (category, amount) => {
    return dispatch({
      type: ADD_NEW_EXPENSE,
      payload: { category, amount }
    });
  };
  const addNewRevenue = (category, amount) => {
    return dispatch({
      type: ADD_NEW_REVENUE,
      payload: { category, amount }
    });
  };

  return (
    <ExpenseContext.Provider value={{ state, dispatch, addNewExpense, addNewRevenue }}>
      {children}
    </ExpenseContext.Provider>
  );
};
