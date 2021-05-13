import AddForm from 'components/AddForm';
import Container from 'components/Container';
import React from 'react'
import styled from 'styled-components';
const Wrapper = styled.div``;
const MainSection = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 2rem;
`;
const Expenses = () => {
  const handleSubmit = (values) => {

  }
  return (
    <Wrapper>
      <Container>
        <MainSection>
          <AddForm  handleSubmit={handleSubmit} title='Expense' />
        </MainSection>
      </Container>
    </Wrapper>
  )
}

export default Expenses
