import styled from 'styled-components';


export default styled.input`
  display: block;
  background-color: ${({ theme,backgroundColor }) =>  backgroundColor === 'light' ? theme.lightColor : '#fff' };
  width: 100%;
  padding: .75rem 2rem;
  border: none;
  outline: none;
  border-radius: 24px;
  margin: .75rem 0;
`;