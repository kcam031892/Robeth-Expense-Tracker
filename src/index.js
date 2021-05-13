import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ExpenseProvider } from 'context/expenseContext';
import App from './App';
import theme from './theme';
import GlobalStyles from './globalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ExpenseProvider>
      <Router>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </ExpenseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
