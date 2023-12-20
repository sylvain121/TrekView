import { TestBed } from '@angular/core/testing';

import { TreksService } from './treks.service';

describe('TreksService', () => {
  let service: TreksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
