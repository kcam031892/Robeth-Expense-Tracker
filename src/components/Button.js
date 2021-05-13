import styled from 'styled-components';
export default styled.button`
  display: block;
  margin: 1rem 0;
  padding: .75rem 2rem;
  min-width: 200px;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.lightColor};
  border-radius: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: no-drop;
  }
`