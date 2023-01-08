import * as mongoose from 'mongoose';

export const Database = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): mongoose.Connection =>
      mongoose.createConnection(process.env.DB_URL),
  },
  {
    provide: 'DATABASE_USER_CONNECTION',
    useFactory: (): mongoose.Connection =>
      mongoose.createConnection(process.env.DB_USER_URL),
  },
  {
    provide: 'DATABASE_SPACES_CONNECTION',
    useFactory: (): mongoose.Connection =>
      mongoose.createConnection(process.env.DB_SPACES_URL),
  },
  {
    provide: 'DATABASE_ITEMS_CONNECTION',
    useFactory: (): mongoose.Connection =>
      mongoose.createConnection(process.env.DB_ITEMS_URL),
  },
];
