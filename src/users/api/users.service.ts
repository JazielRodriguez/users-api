import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}
  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
  async addUser(name: string, age: number) {
    const result = await this.userModel.insertMany([{ name, age }]);
    return result;
  }
  async deleteUser(userId: string) {
    const result = await this.userModel.deleteOne({ _id: userId });
    return result;
  }
  async updateUser(userId: string, age: number) {
    const result = await this.userModel.updateOne(
      { _id: userId },
      { $set: { age: age } },
    );
    return result;
  }
}
