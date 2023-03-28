import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  UserPrivate,
  UserPrivateDocument,
} from '../schemas/private/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersPrivateService {
  constructor(
    @InjectModel('UserPrivate')
    private userPrivateModel: Model<UserPrivateDocument>,
  ) {}
  async getAll(): Promise<UserPrivate[]> {
    try {
      const users = await this.userPrivateModel.find();

      return users;
    } catch (error) {
      return error;
    }
  }
  async addUser(reqParams) {
    try {
      const { name, age } = reqParams;
      const result = await this.userPrivateModel.insertMany([{ name, age }]);
      return result;
    } catch (error) {
      return error;
    }
  }
  async deleteUser(reqParams) {
    const { userId } = reqParams;
    try {
      const result = await this.userPrivateModel.deleteOne({ _id: userId });
      return result;
    } catch (error) {
      return error;
    }
  }
  async updateUser(reqParams) {
    const { age, userId } = reqParams;
    try {
      const result = await this.userPrivateModel.updateOne(
        { _id: userId },
        { $set: { age: age } },
      );
      return result;
    } catch (error) {
      return error;
    }
  }
}
