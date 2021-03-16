import { TestBed } from '@angular/core/testing';

import { CrytoinfoService } from './crytoinfo.service';

describe('CrytoinfoService', () => {
  let service: CrytoinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrytoinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
