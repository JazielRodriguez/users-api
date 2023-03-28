import { Test, TestingModule } from '@nestjs/testing';
import { UsersPrivateController } from './users-private.controller';
import { UsersPrivateService } from './users-private.service';

describe('UsersPrivateController', () => {
  let controller: UsersPrivateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersPrivateController],
      providers: [UsersPrivateService],
    }).compile();

    controller = module.get<UsersPrivateController>(UsersPrivateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
