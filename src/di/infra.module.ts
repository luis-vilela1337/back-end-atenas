import { IAuthServiceProvider } from '@core/abstracts/services/auth.service';
import { IJwtService } from '@core/abstracts/services/jwt-crypt.service';
import { IUserRepository } from '@core/abstracts/services/user.repository';
import { UserRepository } from '@infrastructure/data/mongo/repositories/user.repository';
import { JwtService } from '@infrastructure/services/jwt.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/infra/data/mongo/entities/user';
import { AuthService } from 'src/infra/services/auth/auth.service';

const providers = [
  {
    useClass: AuthService,
    provide: IAuthServiceProvider,
  },
  {
    useClass: UserRepository,
    provide: IUserRepository,
  },
  {
    useClass: JwtService,
    provide: IJwtService,
  },
];
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SALT,
      signOptions: {
        expiresIn: '12h',
      },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers,
  exports: providers.map((el) => el.provide),
})
export class InfraModule {}
