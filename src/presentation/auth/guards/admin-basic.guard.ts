import { AuthGuard } from '@nestjs/passport';

export class AdminBasicAuthGuard extends AuthGuard('admin-basic') {}
