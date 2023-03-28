import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}
  async getAll(): Promise<User[]> {
    try {
      // const users = await this.userModel.find();
      throw new HttpException(
        'Something went bad',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
      // return users;
    } catch (error) {
      return error;
    }
  }
  async addUser(reqParams: CreateUserDto) {
    try {
      const { name, age } = reqParams;
      const result = await this.userModel.insertMany([{ name, age }]);
      return result;
    } catch (error) {
      return error;
    }
  }
  async deleteUser(userId: string) {
    try {
      const result = await this.userModel.deleteOne({ _id: userId });
      return result;
    } catch (error) {
      return error;
    }
  }
  async updateUser(reqParams: UpdateUserDto) {
    const { age, userId } = reqParams;
    try {
      const result = await this.userModel.updateOne(
        { _id: userId },
        { $set: { age: age } },
      );
      return result;
    } catch (error) {
      return error;
    }
  }
}
