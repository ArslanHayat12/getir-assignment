const mockingoose = require('mockingoose');

const record = require('../models/records');
const service = require('../services/record.service');

const MOCK_DATA = [
  {
    key: 'ExSEtrw',
    createdAt: '2021-01-03T02:58:00.940Z',
    totalCount: 72,
  },
  {
    key: 'steVMie',
    createdAt: '2020-05-01T12:30:20.519Z',
    totalCount: 79,
  },
];

describe('Record Service', () => {
  it('should return records from service', () => {
    mockingoose(record.recordModel).toReturn(MOCK_DATA, 'aggregate');

    return new service.RecordService()
      .fetchRecords(new Date('2021-01-01'), new Date('2021-07-01'), 0, 0)
      .then((doc) => {
        expect(doc).toMatchObject(MOCK_DATA);
      });
  });
});
