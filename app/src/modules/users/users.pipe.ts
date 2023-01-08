import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      const err = this.buildError(errors);
      throw new BadRequestException(err, 'Validation failed');
    }
    return value;
  }

  private buildError(errors) {
    const result = {
      error: {}
    };
    errors.forEach((el) => {
      const prop = el.property;
      result.error[prop] = {};
      Object.entries(el.constraints).forEach((constraint) => {
        result.error[prop][constraint[0]] = `${constraint[1]}`;
      });
    });
    return result;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private toValidate(metatype: Function): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
