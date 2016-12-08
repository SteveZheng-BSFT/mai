/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BtnNavService } from './btn-nav.service';

describe('BtnNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtnNavService]
    });
  });

  it('should ...', inject([BtnNavService], (service: BtnNavService) => {
    expect(service).toBeTruthy();
  }));
});
