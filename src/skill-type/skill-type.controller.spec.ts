import { Test, TestingModule } from '@nestjs/testing';

import { SkillTypeController } from './skill-type.controller';

describe('SkillTypeController', () => {
  let controller: SkillTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillTypeController],
    }).compile();

    controller = module.get<SkillTypeController>(SkillTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
