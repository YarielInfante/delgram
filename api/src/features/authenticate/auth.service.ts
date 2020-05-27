import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { compare, hash, genSalt } from 'bcrypt';
import { User } from '../users/user.entity';
import { UserRegisterDTO, UserDto, Payload, UserLoginDTO } from '@delgram/core';

export interface TokenPayload {
  token: string;
  user: UserDto;
}

@Injectable()
export class AuthService {
  logger = new Logger('AuthService');
  constructor(
    private readonly jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async register(userRegisterDTO: UserRegisterDTO): Promise<TokenPayload> {
    if (await this.userService.findByEmail(userRegisterDTO.email)) {
      throw new HttpException('Email found ', HttpStatus.BAD_REQUEST);
    }

    if (await this.userService.findByUsername(userRegisterDTO.username)) {
      throw new HttpException('Email found ', HttpStatus.BAD_REQUEST);
    }
    this.logger.debug(userRegisterDTO);

    const user: User = {
      isActive: true,
      password: await hash(userRegisterDTO.password, await genSalt()),
      email: userRegisterDTO.email,
      firstName: userRegisterDTO.firstName,
      lastName: userRegisterDTO.lastName,
      username: userRegisterDTO.username,
    };

    const userSaved = await this.userService.save(user);

    const payload: Payload = {
      id: userSaved.id,
      username: userSaved.username,
    };

    return {
      token: this.jwtService.sign(payload),
      user: {
        ...userSaved,
      },
    };
  }

  async login(userLogin: UserLoginDTO): Promise<TokenPayload> {
    const loginUserName = userLogin.email;
    const loginPassword = userLogin.password;

    const userFind = await this.userService.findByEmail(loginUserName);

    if (!userFind) {
      throw new HttpException(
        'Invalid login name or password.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const correctPassword = await compare(loginPassword, userFind.password);

    this.logger.debug(`password ${correctPassword}`);

    if (!correctPassword) {
      throw new HttpException(
        'Invalid login name or password.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const payload: Payload = {
      id: userFind.id,
      username: userFind.username,
    };

    return {
      token: this.jwtService.sign(payload),
      user: {
        ...userFind,
      },
    };
  }
}
