import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      data: 'This title is coming from the Nest.js App',
    };
  }
}
