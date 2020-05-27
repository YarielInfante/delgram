import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const commonConf = {
  SYNCRONIZE: false,
  ENTITIES: [__dirname + '/features/*/*.entity{.ts,.js}'],
  MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
  CLI: {
    migrationsDir: 'src/migrations',
  },
  MIGRATIONS_RUN: true,
};

let ormconfig: TypeOrmModuleOptions = {
  name: 'default',
  username: 'prometheus',
  password: '',
  type: 'postgres',
  database: 'delgram',
  logging: true,
  synchronize: true,
  entities: commonConf.ENTITIES,
  migrations: commonConf.MIGRATIONS,
  cli: commonConf.CLI,
  migrationsRun: commonConf.MIGRATIONS_RUN,
};

export { ormconfig };
