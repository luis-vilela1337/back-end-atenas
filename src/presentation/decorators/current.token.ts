import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentToken = createParamDecorator(
  (_, context: ExecutionContext) => {
    const [req] = context.getArgs();
    const authorization = req.header('Authorization');

    if (authorization.split(' ')[0] === 'Bearer') {
      return authorization.split(' ')[1];
    }

    return '';
  },
);
