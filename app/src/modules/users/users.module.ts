import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';
import { UsersProviders } from './users.providers';
import { UsersController } from './users.controller';
@Module({
  controllers: [UsersController],
  providers: [UsersService, ...UsersProviders],
  exports: [UsersService],
  imports: [DatabaseModule],
})
export class UsersModule {}
