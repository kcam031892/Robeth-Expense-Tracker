import styled from 'styled-components';
import { Link  } from 'react-router-dom';

export default styled(Link)`
  display: inline-block;
  background-color: ${({ theme, className }) => (className === 'active' ? theme.primaryColor : theme.lightColor)};
  color: ${({ theme, className }) => (className === 'active' ? theme.lightColor : theme.primaryColor)};
  text-decoration: none;
  padding: 0.75rem 2rem;
  min-width: 30vmin;
  border-radius: 26px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.2s linear;
  &:hover {
    border: ${({ theme, className }) => `2px solid ${className === 'active' ? theme.lightColor : theme.primaryColor}`};
  }
`;

