import AddForm from 'components/AddForm';
import Chart from 'components/Chart';
import Container from 'components/Container';
import { ExpenseContext } from 'context/expenseContext';
import { useExpense } from 'hooks/useExpense';
import React, { useContext } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div``;
const MainSection = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 2rem;
`;
const Expenses = () => {
  const { addNewExpense } = useContext(ExpenseContext);
  const { expensesDataSet, expensesCategories } = useExpense();
  const handleSubmit = ({category,amount}) => {
    console.log(category,amount);
    addNewExpense(category, Number(amount));
  };
  return (
    <Wrapper>
      <Container>
        <MainSection>
          <AddForm handleSubmit={handleSubmit} title='Expense' categories={expensesCategories} />
          <Chart dataset={expensesDataSet} />
        </MainSection>
      </Container>
    </Wrapper>
  );
};

export default Expenses;
