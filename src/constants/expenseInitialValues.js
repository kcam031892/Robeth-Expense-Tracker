import { COLORS } from './colors';
const expenses = [
  {
    category: 'Shopping',
    amount: 0,
    color: COLORS.blueCrayola
  },
  {
    category: 'Bills',
    amount: 0,
    color: COLORS.electricBlue
  },
  {
    category: 'Leisure',
    amount: 0,
    color: COLORS.goldCrayola
  }
];

const revenues = [
  {
    category: 'Work',
    amount: 0,
    color: COLORS.khaki
  },
  {
    category: 'Freelance',
    amount: 0,
    color: COLORS.kobi
  }
];

const INITIAL_VALUES = {
  expenses,
  revenues
};

export { INITIAL_VALUES };
