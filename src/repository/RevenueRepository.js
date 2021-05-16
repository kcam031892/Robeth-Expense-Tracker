import { db as firestore } from 'config/firebase';

class RevenueRepository {
  constructor() {
    this._revenueRef = firestore.collection('revenues');
  }
  /**
   * Get all the expense data.
   * @returns {Promise} All expense data
   */
  async getAll() {
    const query = await this._revenueRef.get();
    const data = query.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  }
  async insert(data) {
    return await this._revenueRef.add(data);
  }
}

export default new RevenueRepository();