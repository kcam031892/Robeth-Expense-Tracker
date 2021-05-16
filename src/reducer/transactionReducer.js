import { LOAD_EXPENSES, ADD_NEW_EXPENSE, ADD_NEW_REVENUE, LOAD_REVENUES } from 'constants/ActionTypes';
const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOAD_EXPENSES:
      return { ...state, expenses: payload };
    case ADD_NEW_EXPENSE:
      return { ...state, expenses: [...state.expenses, payload] };
    case LOAD_REVENUES:
      return { ...state, revenues: payload };
    case ADD_NEW_REVENUE:
      return { ...state, revenues: [...state.revenues, payload] };

    default:
      return state;
  }
};

export default reducer;
