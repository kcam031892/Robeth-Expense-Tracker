import { LOAD_EXPENSES, ADD_NEW_EXPENSE } from 'constants/ActionTypes';
const reducer = (state,action) => {
  const { payload } = action;
  switch(action.type) {
    case LOAD_EXPENSES: 
      console.log('hello');
      return {...state, expenses: payload.expenses}
    default:
      return state;
  }

}

export default reducer;