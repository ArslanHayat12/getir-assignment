import { recordModel } from '../models/records.js';

export class RecordService {
  async fetchRecords(startDate, endDate, minCount, maxCount) {
    try {
      return recordModel.aggregate([
        {
          $project: {
            key: 1,
            value: 1,
            createdAt: 1,
            totalCount: { $sum: '$counts' },
          },
        },
        {
          $match: {
            createdAt: { $gte: startDate, $lte: endDate },
            totalCount: { $gt: minCount, $lt: maxCount },
          },
        },
      ]);
    } catch (err) {
      return undefined;
    }
  }
}
