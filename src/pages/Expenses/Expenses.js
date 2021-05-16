import React, { useContext, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import AddForm from 'components/AddForm';
import Chart from 'components/Chart';
import Container from 'components/Container';
import { ExpenseContext } from 'context/expenseContext';
import { useExpense } from 'hooks/useExpense';
import ExpenseRepository from 'repository/ExpenseRepository';
import { LOAD_EXPENSES } from 'constants/ActionTypes';
const Wrapper = styled.div``;
const MainSection = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 2rem;
`;
const Expenses = () => {
  const { addNewExpense, dispatch } = useContext(ExpenseContext);
  const { expensesDataSet, expensesCategories } = useExpense();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    let isMounted = true;
    const subscribe = async () => {
      const data = await ExpenseRepository.getAll();
      if (isMounted) {
        setIsLoading(false);
        return dispatch({
          type: LOAD_EXPENSES,
          payload: data
        });
       
      }
    };
    subscribe();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async ({ category, amount }) => {
    // Insert to firestore database.
    addNewExpense(category, Number(amount));
  };
  return (
    <Wrapper>
      {isLoading ? (
        'loading'
      ) : (
        <Container>
          <MainSection>
            <AddForm handleSubmit={handleSubmit} title='Expense' categories={expensesCategories} />
            <Chart dataset={expensesDataSet} />
          </MainSection>
        </Container>
      )}
    </Wrapper>
  );
};

export default Expenses;
