import { TestBed } from '@angular/core/testing';

import { CustMatGridService } from './cust-mat-grid.service';

describe('CustMatGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustMatGridService = TestBed.get(CustMatGridService);
    expect(service).toBeTruthy();
  });
});
