import { CreateUserProfileDto } from './../users/dto/CreateUserProfile.dto';
export type CreateUserParams = {
  username: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateUserProfileParams = {
  lastName: string;
  firstName: string;
  age: number;
  dob: string;
};
export type UpdateUserProfileParams = {
    lastName: string;
    firstName: string;
    age: number;
    dob: string;
  };
