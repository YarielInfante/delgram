import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
  IsNull,
} from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
