import { Test, TestingModule } from '@nestjs/testing';

import { AchivemenntsService } from './achivemennts.service';

describe('AchivemenntsService', () => {
  let service: AchivemenntsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AchivemenntsService],
    }).compile();

    service = module.get<AchivemenntsService>(AchivemenntsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
