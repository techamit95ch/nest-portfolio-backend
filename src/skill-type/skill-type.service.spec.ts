import { Test, TestingModule } from '@nestjs/testing';

import { SkillTypeService } from './skill-type.service';

describe('SkillTypeService', () => {
  let service: SkillTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkillTypeService],
    }).compile();

    service = module.get<SkillTypeService>(SkillTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
