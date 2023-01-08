import { Module } from '@nestjs/common';
import { Database } from './database.providers';

@Module({
  providers: [...Database],
  exports: [...Database],
})
export class DatabaseModule {}
