import { TestBed } from '@angular/core/testing';

import { ReduceTextService } from './reduce-text.service';

describe('ReduceTextService', () => {
  let service: ReduceTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReduceTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
