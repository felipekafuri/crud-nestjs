import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456',
    },
  ];

  create({ email, name, password }: CreateUserDto) {
    const id = this.users[this.users.length - 1].id + 1;

    const user: User = {
      id,
      email,
      name,
      password,
    };

    const userExists = this.users.find((user) => user.email === email);

    if (userExists) {
      return 'User already exists';
    }

    this.users.push(user);

    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    const findIndex = this.users.findIndex((user) => user.id === id);
    this.users.splice(findIndex, 1);
    return;
  }
}
