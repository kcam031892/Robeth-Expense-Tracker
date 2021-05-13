import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Link from './Link';

const NavWrapper = styled.nav`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

`

const Nav =  () => {
  const location = useLocation();
  return (
    <NavWrapper>
      <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
        Revenues
      </Link>
      <Link to='/expenses' className={location.pathname === '/expenses' ? 'active' : ''}>Expenses</Link>
    </NavWrapper>
  );
}

export default Nav;