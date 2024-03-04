import { TestBed } from '@angular/core/testing';

import { RegistroParticipanteService } from './registro-participante.service';

describe('RegistroParticipanteService', () => {
  let service: RegistroParticipanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroParticipanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
