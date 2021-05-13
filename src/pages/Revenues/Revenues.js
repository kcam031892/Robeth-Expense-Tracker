import React from 'react'
import styled from 'styled-components';
import Header from 'components/Header'
import Nav from 'components/Nav'

import Container from 'components/Container';
import AddForm from 'components/AddForm';
import Chart from './Chart';


const Wrapper = styled.div`

`;
const MainSection = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 2rem;
`;


const Revenues = () => {
  const handleSubmit = (values) => {
    // TODO: Handle Submit
  }
  return (
    <Wrapper>
     <Container>
      <MainSection>
        <AddForm title='Revenue' handleSubmit={handleSubmit} />
        <Chart />
      </MainSection>
     </Container>
    </Wrapper>
  )
}

export default Revenues
