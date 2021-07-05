import mongoose from 'mongoose';

const { Schema } = mongoose;

const RecordsSchema = new Schema(
  {
    key: String,
    value: String,
    createdAt: Date,
    counts: [Number],
  },
  {
    timestamps: true,
  },
);

const recordModel = mongoose.model('records', RecordsSchema);
export { recordModel };
