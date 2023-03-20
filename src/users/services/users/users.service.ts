import { CreateUserParams, UpdateUserParams, CreateUserProfileParams } from './../../../utils/types';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { Profile } from 'src/typeorm/entities/Profile';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  getAll() {
    
    return this.userRepository.find({ relations: ['profile']});
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

  async createUserProfile(id: number, profileDetails: CreateUserProfileParams) {
    const user =  await this.userRepository.findOneBy({ id })
    if(!user) {
        throw new HttpException(
            'user not found. Cannot create Profile',
            HttpStatus.BAD_REQUEST,
        )
    };
    const newProfile = await this.profileRepository.create(profileDetails); 
    const savedProfile = await this.profileRepository.save(newProfile);
    user.profile = savedProfile
    return this.userRepository.save(user);
  }

  getProfile() {
    return this.profileRepository.find()
  }

}
