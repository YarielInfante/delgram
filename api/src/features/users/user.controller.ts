import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/features/users/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  getAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
