import { useContext,useMemo } from 'react';
import { ExpenseContext } from 'context/expenseContext';
import { expensesCategories as eCat, revenuesCategories as rCat } from 'constants/transactionCategories';
import { flatArray } from 'utils/flatArray';

export const useExpense = () => {
  const { state } = useContext(ExpenseContext);
  const { expenses, revenues } = state;
  const expensesCategories = Object.keys(eCat);

  // EXPENSES
  const flatExpenses = useMemo(() => flatArray(expenses),[expenses])
  const mapExepenses = flatExpenses.map((a) => {
    return {...a,color:eCat[a.category].color};
  }) 

  const expensesData = mapExepenses.reduce((a, b) => {
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
    labels: flatExpenses.map((a) => a.category),
    datasets: [expensesData]
  };


  // REVENUES
  const revenuesCategories = Object.keys(rCat);
  const flatRevenues = useMemo(() => flatArray(revenues),[revenues]);
  const mapRevenues = flatRevenues.map((a) => {
    return { ...a, color: rCat[a.category].color };
  });
  const revenuesData = mapRevenues.reduce((a, b) => {
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
    labels:  flatRevenues.map(a => a.category), //filteredRevenues.map((a) => a.category),
    datasets: [revenuesData]
  };

  return { 
    expensesCategories, 
    expensesDataSet, 
    revenuesCategories, 
    revenuesDatasets 
  };
};
