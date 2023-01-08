import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalService } from './global/global.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, GlobalModule],
  controllers: [AppController],
  providers: [AppService, GlobalService],
})
export class AppModule {}
