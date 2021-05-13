import React from 'react'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import Input from './Input';
const Wrapper = styled.div`
  position: relative;
  ${Input} {
    padding-left: 3rem;
  }
  svg {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({theme}) => theme.primaryColor}
  }
`;



const Search = () => {
  return (
    <Wrapper>
      <FaSearch />
      <Input backgroundColor='light' placeholder='Search here..' />
    </Wrapper>
  );
}

export default Search
