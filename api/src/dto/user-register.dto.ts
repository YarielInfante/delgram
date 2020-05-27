import { UserDto } from './user.dto';

export interface UserRegisterDTO extends UserDto {
  password: string;
}
