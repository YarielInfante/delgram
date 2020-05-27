import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './features/users/users.module';
import { ormconfig } from './orm.config';
import { AuthModule } from './features/authenticate/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UsersModule, AuthModule],
})
export class AppModule {}
