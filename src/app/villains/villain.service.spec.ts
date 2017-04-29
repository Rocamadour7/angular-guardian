import { TestBed, inject } from '@angular/core/testing';

import { VillainService } from './villain.service';

describe('VillainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VillainService]
    });
  });

  it('should ...', inject([VillainService], (service: VillainService) => {
    expect(service).toBeTruthy();
  }));
});
