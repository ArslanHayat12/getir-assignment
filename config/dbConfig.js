import dotenv from 'dotenv';

import mongoose from 'mongoose';

dotenv.config();

export const establishConnection = () => {
  const uri = `${process.env.DB_URI}`;

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const dbConnection = mongoose.connection;

  dbConnection.once('open', async () => {
    console.log(`Connected to database ${process.env.DB_NAME}`);
  });

  dbConnection.on('error', () => {
    console.log(`Error connecting to database ${process.env.DB_NAME}`);
  });
};

export const disconnectDBConnection = () => {
  mongoose.disconnect();
};
