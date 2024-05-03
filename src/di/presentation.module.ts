import { Module } from '@nestjs/common';
import { ApplicationModule } from './application.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from 'src/presentation/auth/http/controllers/auth.controller';
import { BasicStrategy } from 'src/presentation/auth/strategies/basic.strategy';
import { JwtStrategy } from 'src/presentation/auth/strategies/jwt.strategy';
import { InfraModule } from './infra.module';
import { UserController } from '@presentation/user/http/controllers/user.controller';
import { AlbumController } from '@presentation/user/http/controllers/album.controller';

@Module({
  imports: [ApplicationModule, PassportModule, InfraModule],
  controllers: [AuthController, UserController, AlbumController],
  providers: [BasicStrategy, JwtStrategy],
})
export class PresentationModule {}
