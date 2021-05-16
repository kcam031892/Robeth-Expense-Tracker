import { db as firestore } from 'config/firebase';

/**
 * Data Layer for Expenses.
 */
class ExpenseRepository {
  constructor() {
    this._expenseRef = firestore.collection('expenses');
  }
  /**
   * Get all the expense data.
   * @returns {Promise} All expense data
   */
  async getAll() {
    const querySnapshot = await this._expenseRef.get(); 
    const data = querySnapshot.docs.map((doc) => ({id:doc.id,...doc.data()}));
    return data;
  }
  async insert(data) {
    return await this._expenseRef.add(data);

  }
}


export default new ExpenseRepository();