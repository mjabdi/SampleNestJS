import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { Logger } from 'nestjs-pino';
import { UserService } from './user.service';
import { User } from './user.model';
import { threadId } from 'worker_threads';

@Controller('users')
export class UserController {
  constructor(private logger: Logger, private userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(new User(createUserDto));
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
