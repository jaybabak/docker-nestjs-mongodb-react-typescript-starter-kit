import {
  Controller,
  Post,
  Body,
  UsePipes,
  BadRequestException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User, UserSchema } from '../users/schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserValidationPipe } from './users.pipe';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/register')
  @UsePipes(new CreateUserValidationPipe())
  async register(@Body() user: CreateUserDto) {
    try {
      const result: InstanceType<typeof User> = await this.usersService.create(
        user,
      );

      if (result instanceof Model<typeof UserSchema>) {
        return result;
      }
    } catch (error) {
      if (error.hasOwnProperty('code')) {
        if (error.name === 'MongoServerError' && error.code === 11000) {
          throw new BadRequestException({
            error: {
              email: {
                notUnique: 'Email is already in use by a different id',
              },
            },
          });
        }
      }

      throw new BadRequestException(
        {
          error: error,
        },
        'Bad request',
      );
    }
  }
}
