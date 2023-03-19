import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/Create-User.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAll() {
    this.userService.getUsers();
  }

  @Post()
  createUser(@Body() createuserDto: CreateUserDTO) {
    this.userService.createUser(createuserDto);
  }
}
