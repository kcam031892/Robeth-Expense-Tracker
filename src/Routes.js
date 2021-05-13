import Expenses from 'pages/Expenses/Expenses';
import Revenues from 'pages/Revenues/Revenues';
import React from 'react'
import { Switch,Route } from 'react-router-dom';
const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Revenues} />
      <Route path='/expenses' exact component={Expenses} />
    </Switch>
  ); 
}

export default Routes
