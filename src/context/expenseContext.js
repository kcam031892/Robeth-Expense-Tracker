import { createContext, useReducer, useContext } from 'react';
import transactionReducer from 'reducer/transactionReducer';
import { ADD_NEW_REVENUE, ADD_NEW_EXPENSE } from 'constants/ActionTypes';
import ExpenseRepository from 'repository/ExpenseRepository';
import RevenueRepository from 'repository/RevenueRepository';

const initialValues = {
  expenses: [],
  revenues: []
};

export const ExpenseContext = createContext(initialValues);

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialValues);
  const addNewExpense = async (category, amount) => {
      const insertedData = await ExpenseRepository.insert({ category, amount: Number(amount) });
      return dispatch({
        type: ADD_NEW_EXPENSE,
        payload: { id: insertedData.id, category, amount }
      });

    
  };
  const addNewRevenue = async (category, amount) => {
    const insertedData = await RevenueRepository.insert({ category, amount: Number(amount) });
    return dispatch({
      type: ADD_NEW_REVENUE,
      payload: { id:1, category, amount }
    });
  };

  return (
    <ExpenseContext.Provider value={{ state, dispatch, addNewExpense, addNewRevenue }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpensState = () => useContext(ExpenseContext);
