import { Test, TestingModule } from '@nestjs/testing';

import { AchivemenntsController } from './achivemennts.controller';

describe('AchivemenntsController', () => {
  let controller: AchivemenntsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AchivemenntsController],
    }).compile();

    controller = module.get<AchivemenntsController>(AchivemenntsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
