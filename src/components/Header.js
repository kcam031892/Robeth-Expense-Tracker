import React from 'react'
import styled from 'styled-components';
import Title from 'components/Title';
import Container from './Container';
import Search from './Search';

const Wrapper = styled.header`
  padding: 2rem;
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Robeth Expense Tracker</Title>
        <Search />
      </Container>
    </Wrapper>
  );
}

export default Header
