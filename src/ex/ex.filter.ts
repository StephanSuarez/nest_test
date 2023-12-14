import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class ExFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
