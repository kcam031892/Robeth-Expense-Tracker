import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import AddForm from 'components/AddForm';
import Chart from 'components/Chart';
import { useExpense } from 'hooks/useExpense';
import { ExpenseContext } from 'context/expenseContext';
import RevenueRepository from 'repository/RevenueRepository';
import { LOAD_REVENUES } from 'constants/ActionTypes';

const Wrapper = styled.div``;
const MainSection = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 2rem;
`;

const Revenues = () => {
  const { addNewRevenue, dispatch } = useContext(ExpenseContext);
  const { revenuesDatasets, revenuesCategories } = useExpense();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const subscribe = async () => {
      const data = await RevenueRepository.getAll();
      if (isMounted) {
        setIsLoading(false);
        return dispatch({
          type: LOAD_REVENUES,
          payload: data
        });
      }
    };
    subscribe();

    return () => (isMounted = false);
  }, []);

  const handleSubmit = ({ category, amount }) => {
    addNewRevenue(category, Number(amount));
  };
  return (
    <Wrapper>
      {isLoading ? (
        'Loading..'
      ) : (
        <Container>
          <MainSection>
            <AddForm title='Revenue' handleSubmit={handleSubmit} categories={revenuesCategories} />
            <Chart dataset={revenuesDatasets} />
          </MainSection>
        </Container>
      )}
    </Wrapper>
  );
};

export default Revenues;
