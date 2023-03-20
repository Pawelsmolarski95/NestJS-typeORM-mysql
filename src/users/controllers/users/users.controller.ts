import { CreateUserProfileDto } from './../../dto/CreateUserProfile.dto';
import { CreateUserDto } from './../../dto/CreateUser.dto';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { UpdateUserDto } from 'src/users/dto/UpdateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUser() {
    return this.usersService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Put('/:id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    {
      await this.usersService.updateUser(id, updateUserDto);
    }
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    this.usersService.deleteUserById(id);
  }

  @Post(':id/profile')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.usersService.createUserProfile(id, createUserProfileDto)
  }
  @Get('/profile')
  findAllProfile() {
    return this.usersService.getProfile();
  }
}
