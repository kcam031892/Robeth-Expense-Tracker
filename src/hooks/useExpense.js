import { useContext } from 'react';
import { ExpenseContext } from 'context/expenseContext';

export const useExpense = () => {
  const { state } = useContext(ExpenseContext);
  const { expenses, revenues } = state;
  
  const expensesCategories = expenses.map((a) => a.category);
  const filteredExpenses = expenses.filter((a) => a.amount > 0);

  const expensesData = filteredExpenses.reduce((a, b) => {
    if (!a['data'] && !a['backgroundColor']) {
      a['data'] = [b.amount];
      a['backgroundColor'] = [b.color];
    } else {
      a['data'] = a['data'].concat(b.amount);
      a['backgroundColor'] = a['backgroundColor'].concat(b.color);
    }
    return a;
  }, {});

  const expensesDataSet = {
    labels: filteredExpenses.map((a) => a.category),
    datasets: [expensesData]
  };


  const revenuesCategories = revenues.map((a) => a.category);
  const filteredRevenues = revenues.filter((a) => a.amount > 0);
  const revenuesData = filteredRevenues.reduce((a, b) => {
    if (!a['data'] && !a['backgroundColor']) {
      a['data'] = [b.amount];
      a['backgroundColor'] = [b.color];
    } else {
      a['data'] = a['data'].concat(b.amount);
      a['backgroundColor'] = a['backgroundColor'].concat(b.color);
    }
    return a;
  }, {});
  const revenuesDatasets = {
    labels: filteredRevenues.map((a) => a.category),
    datasets: [revenuesData]
  };

  return { 
    expensesCategories, 
    expensesDataSet, 
    revenuesCategories, 
    revenuesDatasets 
  };
};
