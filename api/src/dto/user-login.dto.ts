import { UserDto } from './user.dto';

export interface UserLoginDTO extends UserDto {
  readonly password: string;
}
