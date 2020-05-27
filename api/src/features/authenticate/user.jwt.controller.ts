import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AuthService, TokenPayload } from './auth.service';
import { UserLoginDTO } from 'src/dto/user-login.dto';
import { UserRegisterDTO } from 'src/dto/user-register.dto';

@Controller('api')
export class UserJWTController {
  logger = new Logger('UserJWTController');

  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() userRegister: UserRegisterDTO): Promise<TokenPayload> {
    return await this.authService.register(userRegister);
  }

  @Post('/authenticate')
  async authorize(@Body() user: UserLoginDTO): Promise<TokenPayload> {
    const jwt = await this.authService.login(user);

    return jwt;
  }
}
