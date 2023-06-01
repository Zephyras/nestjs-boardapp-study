import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5001,
  username: 'postgres',
  password: 'postgres',
  database: 'board-DB',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  //synchronize: true 값을 주면 애플리케이션을 다시 실행할 때 엔티티안에서 수정된 컬럼의 길이 타입 변경값등을 해당 테이블을 Drop한 후 다시 생성해줍니다.
  synchronize: true,
};
