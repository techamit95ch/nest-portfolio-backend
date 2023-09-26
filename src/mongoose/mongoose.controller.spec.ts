import { Test, TestingModule } from '@nestjs/testing';

import { MongooseController } from './mongoose.controller';

describe('MongooseController', () => {
  let controller: MongooseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MongooseController],
    }).compile();

    controller = module.get<MongooseController>(MongooseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
