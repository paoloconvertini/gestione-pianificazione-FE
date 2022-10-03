import { TestBed } from '@angular/core/testing';

import { PianificatoService } from './pianificato.service';

describe('PianificatoService', () => {
  let service: PianificatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PianificatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
