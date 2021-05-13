import styled from 'styled-components';

export default styled.div`
  background-color: ${({ theme }) => theme.accentColor};
  padding: 1rem 2rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;