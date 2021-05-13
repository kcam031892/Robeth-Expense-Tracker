import { useContext} from 'react'
import styled from 'styled-components';
import Container from 'components/Container';
import AddForm from 'components/AddForm';
import Chart from './Chart';
import { useExpense } from 'hooks/useExpense';
import { ExpenseContext } from 'context/expenseContext';


const Wrapper = styled.div`

`;
const MainSection = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 2rem;
`;


const Revenues = () => {
  const { addNewRevenue } = useContext(ExpenseContext);
  const { revenuesDatasets } = useExpense();
  const handleSubmit = ({category,amount}) => {
    addNewRevenue(category, Number(amount));

  }
  return (
    <Wrapper>
      <Container>
        <MainSection>
          <AddForm title='Revenue' handleSubmit={handleSubmit} />
          <Chart dataset={revenuesDatasets} />
        </MainSection>
      </Container>
    </Wrapper>
  );
}

export default Revenues
