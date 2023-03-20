import { CreateUserParams, UpdateUserParams } from './../../../utils/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAll() {
    
    return this.userRepository.find();
  }

  getUserById(id:number) {
    return this.userRepository.findOneBy({ id })

  }

  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      created_at: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  updateUser(id: number, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({id}, {...updateUserDetails} )

  }

  deleteUserById (id: number) {
    return this.userRepository.delete({ id })  
  }
}
