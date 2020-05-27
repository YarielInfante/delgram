import { UserJWTController } from './user.jwt.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'yagala',
    }),
  ],
  controllers: [UserJWTController],
  providers: [AuthService],
})
export class AuthModule {}
