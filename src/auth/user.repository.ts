import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentialDto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

export class UserRepository extends Repository<User> {
  constructor(@InjectRepository(User) private dataSource: DataSource) {
    super(User, dataSource.manager);
  }
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const { username, password } = authCredentialsDto;
    const hashedpassword = await bcrypt.hash(password, salt);

    const user = this.create({ username, password: hashedpassword });

    try {
      await this.save(user);
      return user;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
