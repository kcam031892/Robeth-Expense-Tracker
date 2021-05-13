import Main from 'components/Main';
import Routes from 'Routes';
import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => (theme.gradientColor) } ;
`;
function App() {
  return (
    <Wrapper>
      <Main />
      <Routes />
    </Wrapper>
  );
}

export default App;
