import styled from 'styled-components';

export default styled.select`
  position: relative;
  width: 100%;
  background-color: ${({ theme, backgroundColor }) => (backgroundColor === 'light' ? theme.lightColor : '#fff')};
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  padding: 0.75rem 2rem;
  border: none;
  outline: none;
  border-radius: 28px;
  appearance: none;
`;
